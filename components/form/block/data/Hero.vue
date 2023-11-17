<script setup>
const emit = defineEmits(["update"]);

const imageSelector = useImageSelector();

const props = defineProps({
  data: {
    type: Object,
    default: {
      countdown: null,
      bg: {
        src: null,
      },
      logo: {
        src: null,
        alt: null,
        spin: null,
      },
      title: {
        html: null,
      },
    },
  },
});

const data = ref({
  ...props.data,
});

const update = () => {
  return emit("update", {
    ...data.value,
    countdown: Math.round(new Date(data.value.countdown)),
  });
};
</script>

<template>
  <div id="form-block-data-hero">
    <div class="input">
      <label>Nedtælling</label>
      <input v-model="data.countdown" @change="update" type="date" />
    </div>
    <div class="input">
      <label
        >Baggrundskilde URL
        <span class="cursor-pointer underline" @click="imageSelector.toggle()"
          >(Vælg ressurse)</span
        ></label
      >
      <input
        v-model="data.bg.src"
        @change="update"
        type="text"
        placeholder="Indtast baggrundskilde"
      />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="input">
        <label>Logo kilde <span class="cursor-pointer underline" @click="imageSelector.toggle()"
          >(Vælg billede)</span
        ></label>
        <input
          v-model="data.logo.src"
          @change="update"
          type="text"
          placeholder="Indtast kilde"
        />
      </div>
      <div class="input">
        <label>Logo alt-tekst</label>
        <input
          v-model="data.logo.alt"
          @change="update"
          type="text"
          placeholder="Indtast alt-tekst"
        />
      </div>
      <div class="checkbox">
        <input v-model="data.logo.spin" @change="update" type="checkbox" />
        <label>Spin effekt</label>
      </div>
    </div>
    <div class="input">
      <label>Titel HTML</label>
      <input
        v-model="data.title.html"
        @change="update"
        type="text"
        placeholder="Indtast titel html"
      />
    </div>
  </div>
</template>

<style>
#form-block-data-hero {
  @apply flex flex-col space-y-2;
}

#form-block-data-hero .input {
  color-scheme: dark;
}
</style>
