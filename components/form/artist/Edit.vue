<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid";

const supabase = useSupabaseClient();
const sidebar = useSidebar();
const imageSelector = useImageSelector();
const modal = useModal();

// Get artists from Supanase
const { data } = await supabase.from("artists").select().order("created_at");
const artists = ref(data);

const locations = ref([])

async function getLocations() {
  const { data, error } = await supabase
  .from("artists")
  .select("*");

  const allLocations = data.map(artist => artist.location)
  const removeDoubles = allLocations.filter((location, index) => allLocations.indexOf(location) === index)

  if(!error){
    locations.value = removeDoubles
    console.log(locations.value)
  }
}

getLocations()


const loading = ref(false);

const style = ref(null);

const editArtist = ref(null);

const setArtist = (artist) => {
  artist.date = artist.date.split("T")[0];
  editArtist.value = artist;
};

const festivalYears = ref([]);
artists.value.forEach((artist) => {
  if (!festivalYears.value.includes(artist.date.split("-")[0])) {
    return festivalYears.value.push(artist.date.split("-")[0]);
  }
});

const update = async () => {
  if (loading.value) {
    return;
  }

  // Update loading state
  loading.value = true;

  // Insert artists and select new rows
  const request = await supabase
    .from("artists")
    .update({
      name: editArtist.value.name,
      subtitle: editArtist.value.subtitle,
      identifier: editArtist.value.identifier,
      type: editArtist.value.type,
      date: editArtist.value.date,
      time: editArtist.value.time,
      location: editArtist.value.location,
      image: editArtist.value.image,
      header: editArtist.value.header,
      body: editArtist.value.body,
      socials: editArtist.value.socials,
      genre: editArtist.value.genre,
      public: editArtist.value.public,
      cancelled: editArtist.value.cancelled,
    })
    .eq("id", editArtist.value.id);

  // Error handling
  if (request.error) {
    modal.setComponent(
      h(
        "div",
        { class: "w-full max-w-4xl flex flex-col items-center justify-center" },
        [
          h("h3", { class: "text-2xl" }, "Der er sket en fejl"),
          h(
            "p",
            { class: "mb-2" },
            "Der er sket en fejl under redigeringen denne kunstners information"
          ),
          h(
            "p",
            { class: "opacity-50 text-xs" },
            `Fejlkode: ${JSON.stringify(request.error)}`
          ),
        ]
      )
    );

    // Update loading state
    loading.value = false;

    return modal.toggle();
  }

  modal.setComponent(
    h(
      "div",
      { class: "w-full max-w-xl flex flex-col items-center justify-center" },
      [
        h("h3", { class: "text-2xl" }, "Succes"),
        h("p", "Du har redigeret denne kunstner: " + editArtist.value.name),
      ]
    )
  );

  // Update loading state
  loading.value = false;

  modal.toggle();
  sidebar.toggle();

  setTimeout(() => {
    location.reload();
  }, 3000);
};
</script>

<template>
  <form id="form-artist-edit" @submit.prevent="update">
    <div v-if="!editArtist" class="flex flex-col space-y-4">
      <BaseAccordion
        v-for="(year, index) in festivalYears"
        :title="`Kold Festival - ${year}`"
        :opened="index == 0"
      >
        <h2>Vælg venligst en kunster fra listen</h2>
        <ul v-if="artists.length" class="flex flex-col space-y-2">
          <li
            v-for="artist in artists.filter((filteredArtist) => {
              return filteredArtist.date.split('-')[0] == year;
            })"
            @click="setArtist(artist)"
            class="flex flex-col text-white cursor-pointer hover:opacity-75 text-base"
          >
            <span>{{ artist.name }}</span
            ><span class="text-xs text-white/50">{{ artist.identifier }}</span>
          </li>
        </ul></BaseAccordion
      >
    </div>

    <div v-if="editArtist" class="flex flex-col space-y-4">
      <h2 class="text-2xl">Rediger kunstner</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="input">
          <label>Navn *</label>
          <input
            v-model="editArtist.name"
            type="text"
            placeholder="Indtast kunsternavn"
          />
        </div>
        <div class="input">
          <label>Undertitel</label>
          <input
            v-model="editArtist.subtitle"
            type="text"
            placeholder="Indtast undertitel"
          />
        </div>
        <div class="input">
          <label>Identifikation</label>
          <input
            v-model="editArtist.identifier"
            type="text"
            placeholder="F.eks ude-af-kontrol"
          />
        </div>
        <div class="input">
          <label>Type *</label>
          <select v-model="editArtist.type">
            <option value="">Vælg venligst</option>
            <option value="concert">Koncert</option>
            <option value="talk">Talk</option>
          </select>
        </div>
        <div class="input">
          <label>Dato *</label>
          <input v-model="editArtist.date" type="date" />
        </div>
        <div class="input">
          <label>Tidspunkt</label>
          <input
            v-model="editArtist.time"
            type="time"
            placeholder="20.00"
          />
        </div>
        <div class="input col-span-2">
          <label>Lokation</label>
          <div class="grid grid-cols-2 gap-4">
          <input
            v-model="editArtist.location"
            type="text"
            placeholder="Indtast lokation"
          />
          <select v-if="locations.length" v-model="editArtist.location">
            <option disabled selected value="">Vælg fra liste</option>
            <option
            v-for="(location, key) in locations" 
            :key={key}
            :value="location">{{ location }}</option>
          </select>
        </div>
        </div>
      </div>
      <div class="input">
        <label
          >Kunsterbillede URL *
          <span class="cursor-pointer underline" @click="imageSelector.toggle()"
            >(Vælg billede)</span
          ></label
        >
        <input
          v-model="editArtist.image"
          type="text"
          placeholder="Indtast link til kunstnertitel"
        />
      </div>
      <div class="input">
        <label
          >Header billede URL *
          <span class="cursor-pointer underline" @click="imageSelector.toggle()"
            >(Vælg billede)</span
          ></label
        >
        <input
          v-model="editArtist.header"
          type="text"
          placeholder="Indtast link til header billede"
        />
      </div>
      <div class="input">
        <label>Beskrivelse</label>
        <textarea
          v-model="editArtist.body"
          class="h-64"
          placeholder="Indtast beskrivelse som HTML"
        ></textarea>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="input">
          <label>Facebook</label>
          <input
            v-model="editArtist.socials.facebook"
            type="text"
            placeholder="Indtast link til facebook side"
          />
        </div>
        <div class="input">
          <label>Instagram</label>
          <input
            v-model="editArtist.socials.instagram"
            type="text"
            placeholder="Indtast link til instagram"
          />
        </div>
        <div class="input">
          <label>Hjemmeside</label>
          <input
            v-model="editArtist.socials.website"
            type="text"
            placeholder="Indtast link til hjemmeside"
          />
        </div>
        <div class="input">
          <label>Spotify</label>
          <input
            v-model="editArtist.socials.spotify"
            type="text"
            placeholder="Indtast link til spotify"
          />
        </div>
      </div>
      <div class="input" v-if="editArtist.genre.styles.length">
        <label>Genrer</label>
        <ul class="grid grid-cols-2 gap-4">
          <li
            v-for="(style, index) in editArtist.genre.styles"
            class="py-2 px-6 border-2 border-white flex items-center justify-between font-body"
          >
            <span>{{ style }}</span
            ><TrashIcon
              class="h-4 w-4 cursor-pointer"
              @click="editArtist.genre.styles.splice(index, 1)"
            />
          </li>
        </ul>
      </div>
      <div class="input">
        <label>Tilføj genre</label>
        <input
          v-model="style"
          type="text"
          placeholder="Indtast navn på genre"
        />
        <BaseButton
          @click.prevent="
            if (style && !editArtist.genre.styles.includes(style.toUpperCase())) {
              editArtist.genre.styles.push(style.toUpperCase());
              style = null;
            }
          "
          >Tilføj</BaseButton
        >
      </div>
      <div class="checkbox">
        <input v-model="editArtist.cancelled" type="checkbox" />
        <label>Marker som aflyst</label>
      </div>
      <div class="checkbox">
        <input v-model="editArtist.public" :checked="!!editArtist.public" type="checkbox" />
        <label>Offentliggør</label>
      </div>
      <BaseButton :loading="loading">Gem ændringer</BaseButton>
    </div>
  </form>
</template>

<style>
#form-artist-edit .input {
  @apply flex flex-col space-y-2;
  color-scheme: dark;
}

#form-artist-edit .checkbox {
  @apply flex items-center space-x-2;
}

.accordion {
  @apply bg-blue-900/75 p-4 flex flex-col;
}

.accordion-title {
  @apply font-bold font-header flex items-center justify-between text-white text-2xl cursor-pointer;
}

.accordion-content {
  @apply pt-4;
}
</style>