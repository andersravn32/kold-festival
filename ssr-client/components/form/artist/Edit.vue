<script setup>
const supabase = useSupabaseClient();

// Get artists from Supanase
const { data } = await supabase.from("artists").select();
const artists = data;

const editArtist = ref(null);
</script>

<template>
  <form id="form-artist-edit" @submit.prevent>
    <div v-if="!editArtist">
      <h2>Vælg venligst en kunster fra listen</h2>
      <ul v-if="artists.length" class="flex flex-col space-y-2">
        <li
          v-for="(artist, index) in artists"
          @click="editArtist = artist"
          class="flex flex-col text-white cursor-pointer hover:opacity-75"
        >
          <span>{{ artist.name }}</span
          ><span class="text-xs text-white/50">{{ artist.identifier }}</span>
        </li>
      </ul>
    </div>

    
  </form>
</template>

<style>
#form-artist-edit {
  @apply flex flex-col space-y-4;
}

#form-artist-edit .input {
  @apply flex flex-col space-y-2;
}

#form-artist-edit .checkbox {
  @apply flex items-center space-x-2;
}
</style>
