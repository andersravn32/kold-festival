<script setup>
const supabase = useSupabaseClient();

// Get artists from Supanase
const artists = await supabase.from("artists").select();

const selectedArtist = ref(null);
</script>

<template>
    <form id="form-artist-edit" @submit.prevent>

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