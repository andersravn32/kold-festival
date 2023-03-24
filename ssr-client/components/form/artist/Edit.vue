<script setup>
const supabase = useSupabaseClient();
const sidebar = useSidebar();
const modal = useModal();

// Get artists from Supanase
const { data } = await supabase.from("artists").select().order("created_at");
const artists = data;

const loading = ref(false);

const editArtist = ref(null);

const setArtist = (artist) => {
  artist.date = artist.date.split("T")[0];
  editArtist.value = artist;
};

const update = async () => {
  if (loading.value) {
    return;
  }

  // Update loading state
  loading.value = true;
  console.log(editArtist.value);
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
};
</script>

<template>
  <form id="form-artist-edit" @submit.prevent="update">
    <div v-if="!editArtist" class="flex flex-col space-y-4">
      <h2>Vælg venligst en kunster fra listen</h2>
      <ul v-if="artists.length" class="flex flex-col space-y-2">
        <li
          v-for="artist in artists"
          @click="setArtist(artist)"
          class="flex flex-col text-white cursor-pointer hover:opacity-75"
        >
          <span>{{ artist.name }}</span
          ><span class="text-xs text-white/50">{{ artist.identifier }}</span>
        </li>
      </ul>
    </div>

    <div v-if="editArtist" class="flex flex-col space-y-4">
      <h2 class="text-2xl">Rediger kunstner</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="input">
          <label>Navn</label>
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
          <label>Type</label>
          <select v-model="editArtist.type">
            <option value="">Vælg venligst</option>
            <option value="concert">Koncert</option>
            <option value="talk">Talk</option>
          </select>
        </div>
        <div class="input">
          <label>Dato</label>
          <input v-model="editArtist.date" type="date" />
        </div>
        <div class="input">
          <label>Tidspunkt</label>
          <input
            v-model="editArtist.time"
            type="text"
            placeholder="f.eks. kl 20.00"
          />
        </div>
        <div class="input">
          <label>Lokation</label>
          <input
            v-model="editArtist.location"
            type="text"
            placeholder="Indtast lokation"
          />
        </div>
      </div>
      <div class="input">
        <label>Kunsterbillede</label>
        <input
          v-model="editArtist.image"
          type="text"
          placeholder="Indtast link til kunstnertitel"
        />
      </div>
      <div class="input">
        <label>Header billede</label>
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
      <div class="checkbox">
        <input v-model="editArtist.public" type="checkbox" />
        <label>Offentliggør</label>
      </div>
      <BaseButton :loading="loading">Gem ændringer</BaseButton>
    </div>
  </form>
</template>

<style>
#form-artist-edit .input {
  @apply flex flex-col space-y-2;
}

#form-artist-edit .checkbox {
  @apply flex items-center space-x-2;
}
</style>
