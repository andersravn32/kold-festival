<script setup>
import { TrashIcon } from "@heroicons/vue/24/solid";

const supabase = useSupabaseClient();
const modal = useModal();
const imageSelector = useImageSelector();
const sidebar = useSidebar();

const artist = ref({
  name: null,
  subtitle: null,
  identifier: null,
  type: "",
  date: new Date().toISOString().split("T")[0],
  time: null,
  location: '',
  image: null,
  header: null,
  body: null,
  public: false,
  socials: {
    facebook: null,
    instagram: null,
    website: null,
    spotify: null,
  },
  genre: {
    styles: [],
  },
  cancelled: false,
});

const locations = ref([])

async function getLocations() {
  const { data, error } = await supabase
  .from("artists")
  .select("*");

  const allLocations = data.map(artist => artist.location)
  const removeDoubles = allLocations.filter((location, index) => allLocations.indexOf(location) === index)

  if(!error){
    locations.value = removeDoubles
  }
}

getLocations()

const style = ref(null);

// Loading state
const loading = ref(false);

const create = async () => {
  if (loading.value) {
    return;
  }

  // Update loading state
  loading.value = true;

  artist.value.identifier = (artist.value.name) ? artist.value.name.toLowerCase().split(' ').join('-') : null

  // Insert artists and select new rows
  const request = await supabase.from("artists").insert(artist.value);

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
            "Der er sket en fejl under oprettelsen af en ny kunstner"
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
        h("p", "Du har nu oprettet en ny kunstner"),
      ]
    )
  );
  // Update loading state
  loading.value = false;

  modal.toggle();
  sidebar.toggle();
};
</script>

<template>
  <form id="form-artist-create" @submit.prevent="create">
    <h2 class="text-2xl">Opret ny kunster</h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="input col-span-2">
        <label>Navn *</label>
        <input
          v-model="artist.name"
          type="text"
          placeholder="Indtast kunsternavn"
        />
      </div>
      <div class="input col-span-2">
        <label>Undertitel</label>
        <input
          v-model="artist.subtitle"
          type="text"
          placeholder="Indtast undertitel"
        />
      </div>
      <div class="input col-span-2">
        <label>Type *</label>
        <select v-model="artist.type">
          <option value="">Vælg venligst</option>
          <option value="concert">Koncert</option>
          <option value="talk">Talk</option>
        </select>
      </div>
      <div class="input">
        <label>Dato *</label>
        <input v-model="artist.date" type="date" />
      </div>
      <div class="input">
        <label>Tidspunkt</label>
        <input
          v-model="artist.time"
          type="time"
          placeholder="20.00"
        />
      </div>
      <div class="input col-span-2">
        <label>Lokation</label>
        <div class="grid grid-cols-2 gap-4">
        <input
          v-model="artist.location"
          type="text"
          placeholder="Indtast lokation"
        />
      <select v-if="locations.length" v-model="artist.location">
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
        v-model="artist.image"
        type="text"
        placeholder="Indtast URL til kunstnertitel"
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
        v-model="artist.header"
        type="text"
        placeholder="Indtast URL til header billede"
      />
    </div>
    <div class="input">
      <label>Beskrivelse</label>
      <textarea
        v-model="artist.body"
        class="h-64"
        placeholder="Indtast beskrivelse som HTML"
      ></textarea>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="input">
        <label>Facebook</label>
        <input
          v-model="artist.socials.facebook"
          type="text"
          placeholder="Indtast link til facebook side"
        />
      </div>
      <div class="input">
        <label>Instagram</label>
        <input
          v-model="artist.socials.instagram"
          type="text"
          placeholder="Indtast link til instagram"
        />
      </div>
      <div class="input">
        <label>Hjemmeside</label>
        <input
          v-model="artist.socials.website"
          type="text"
          placeholder="Indtast link til hjemmeside"
        />
      </div>
      <div class="input">
        <label>Spotify</label>
        <input
          v-model="artist.socials.spotify"
          type="text"
          placeholder="Indtast link til spotify"
        />
      </div>
    </div>
    <div class="input" v-if="artist.genre.styles.length">
      <label>Genrer</label>
      <ul class="grid grid-cols-2 gap-4">
        <li
          v-for="(style, index) in artist.genre.styles"
          class="py-2 px-6 border-2 border-white flex items-center justify-between font-body"
        >
          <span>{{ style }}</span
          ><TrashIcon
            class="h-4 w-4 cursor-pointer"
            @click="artist.genre.styles.splice(index, 1)"
          />
        </li>
      </ul>
    </div>
    <div class="input">
      <label>Tilføj genre</label>
      <input v-model="style" type="text" placeholder="Indtast navn på genre" />
      <BaseButton
        @click.prevent="
          if (style && !artist.genre.styles.includes(style.toUpperCase())) {
            artist.genre.styles.push(style.toUpperCase());
            style = null;
          }
        "
        >Tilføj</BaseButton
      >
    </div>
    <div class="checkbox">
      <input v-model="artist.cancelled" type="checkbox" />
      <label>Marker som aflyst</label>
    </div>
    <div class="checkbox">
      <input v-model="artist.public" :checked="!!artist.public" type="checkbox" />
      <label>Offentliggør</label>
    </div>
    <BaseButton :loading="loading">Opret ny kunstner</BaseButton>
  </form>
</template>

<style>
#form-artist-create {
  @apply flex flex-col space-y-4;
}

#form-artist-create .input {
  @apply flex flex-col space-y-2;
  color-scheme: dark;
}

#form-artist-create .checkbox {
  @apply flex items-center space-x-2;
}
</style>
