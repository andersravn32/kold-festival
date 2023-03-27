<script setup>
import { FolderIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const supabase = useSupabaseClient();
const imageSelector = useImageSelector();
const runtimeConfig = useRuntimeConfig();

// Bucket related
const buckets = await supabase.storage.listBuckets();
const selectorBucket = ref("");
const selectedBucket = ref(null);

// For storing and uploading images
const image = ref(null);
const images = ref([]);
const selectedImage = ref(null);
const loading = ref(false);

// Callback for image input
const setImage = (e) => {
  return (image.value = e.target.files[0]);
};

// Main upload method
const upload = async () => {
  if (!selectedBucket.value) {
    return alert("Vælg venligst en mappe");
  }

  if (!image.value) {
    return alert("Vælg venligst et billede at uploade");
  }

  const { error } = await supabase.storage
    .from(selectedBucket.value)
    .upload(`${image.value.name}`, image.value, {
      upsert: true,
    });

  if (error) {
    return;
  }
  selectorBucket.value = selectedBucket.value;

  return loadImages();
};

const remove = async (name, bucket) => {
  if (!confirm("Ønsker du at slette dette billede?")) {
    return;
  }

  const { data } = await supabase.storage.from(bucket).remove([name]);

  // Return error
  if (!data) {
    return;
  }

  images.value = images.value.filter((image) => {
    return image.name != name;
  });

  // Reset
  selectedImage.value = null;
};

const copy = async (text) => {
  await navigator.clipboard.writeText(text);
  return alert("URL kopieret til udklipsholder.");
};

const loadImages = async () => {
  if (!selectorBucket.value) {
    return;
  }

  images.value = [];
  const { data, error } = await supabase.storage
    .from(selectorBucket.value)
    .list();

  if (error) {
    return;
  }
  return (images.value = data.filter((image) => {
    return (
      image.name != ".emptyFolderPlaceholder" &&
      !image.metadata.mimetype.includes("mp4")
    );
  }));
};
</script>

<template>
  <div id="image-selector-overlay">
    <div id="image-selector">
      <div class="flex items-center justify-between text-white">
        <h2 class="text-2xl">Administrer billeder</h2>
        <button @click="imageSelector.toggle()">
          <XMarkIcon class="h-12 w-12" />
        </button>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="images">
          <div class="input">
            <label>Vælg venligst en mappe</label>
            <select v-model="selectorBucket" @change="loadImages">
              <option value="" disabled>Vælg venligst en mappe</option>
              <option v-for="bucket in buckets.data" :value="bucket.name">
                {{ bucket.name }}
              </option>
            </select>
          </div>
          <ul class="images-container" v-if="images.length">
            <li
              v-for="(image, index) in images"
              class="grid place-items-center cursor-pointer"
              @click="
                selectedImage = image;
                selectedImage.url = `${runtimeConfig.public.urlBase}${selectorBucket}/${image.name}`;
              "
            >
              <img
                :src="`${runtimeConfig.public.urlBase}${selectorBucket}/${image.name}`"
                :alt="index"
              />
            </li>
          </ul>
        </div>
        <div class="controls">
          <BaseTabs>
            <BaseTab title="Administrer" class="flex flex-col">
              <div
                class="h-full grid place-items-center text-white/25"
                v-if="!selectedImage"
              >
                <p class="py-16">Vælg venligst et billede</p>
              </div>
              <div
                v-if="selectedImage"
                class="flex flex-col space-y-4 text-white font-body h-full"
              >
                <div class="h-48">
                  <img
                    class="object-cover w-full h-full"
                    :src="selectedImage.url"
                    alt="Valgte billede"
                  />
                </div>
                <div class="flex flex-col text-sm">
                  <h3>Information</h3>
                  <p>Filnavn: {{ selectedImage.name }}</p>
                  <p>Filtype: {{ selectedImage.metadata.mimetype }}</p>
                </div>
                <BaseButton
                  @click="
                    imageSelector.url = selectedImage.url;
                    copy(selectedImage.url);
                  "
                  >Kopier URL</BaseButton
                >
                <span
                  class="underline cursor-pointer"
                  @click="remove(selectedImage.name, selectorBucket)"
                  >Slet billede</span
                >
              </div>
            </BaseTab>
            <BaseTab title="Upload">
              <form id="form-image-upload" @submit.prevent="upload">
                <div class="input">
                  <label>Vælg venligst en mappe</label>
                  <div
                    v-for="bucket in buckets.data"
                    class="flex space-x-4 items-center text-white hover:opacity-75 cursor-pointer"
                    :class="{
                      'bucket-active': selectedBucket == bucket.name,
                    }"
                    @click="selectedBucket = bucket.name"
                  >
                    <FolderIcon class="w-6 h-6" />
                    <span>{{ bucket.name }}</span>
                  </div>
                </div>
                <div class="input">
                  <label>Vælg venligst et billede</label>
                  <input
                    class="text-xs"
                    type="file"
                    accept="image/jpeg"
                    @change="setImage"
                  />
                </div>
                <BaseButton :loading="loading">Upload</BaseButton>
              </form></BaseTab
            >
          </BaseTabs>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#image-selector-overlay {
  @apply fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-50 grid place-items-center p-4;
}

#image-selector {
  @apply bg-midnight p-4 w-full max-w-4xl flex flex-col;
}

#image-selector .input {
  @apply flex flex-col space-y-2;
}

#form-image-upload {
  @apply flex flex-col space-y-4;
}

#image-selector .images {
  @apply col-span-2 flex flex-col space-y-4;
}

#image-selector .controls {
  @apply font-body;
}

#image-selector .tabs-titles {
  @apply flex items-center space-x-4 mb-4;
}

#image-selector .tab-title {
  @apply text-white cursor-pointer;
}

#image-selector .tabs {
  @apply h-full flex flex-col;
}

#image-selector .tabs-content,
#image-selector .tab {
  @apply h-full;
}

#image-selector .tab-active {
  @apply text-white underline opacity-75;
}

#image-selector .images-container {
  @apply max-h-96 overflow-scroll grid grid-cols-2;
}

.bucket-active {
  @apply text-indigo-500 hover:opacity-100;
}
</style>
