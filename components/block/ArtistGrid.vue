<script setup>
const supabase = useSupabaseClient();
const router = useRouter();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data, error } = await supabase
  .from("artists")
  .select("*")
  .order("id", { ascending: true });

const artists = data.filter((artist) => {
  return artist.public && artist.date.split("-")[0] == props.data.year;
});
</script>

<template>
  <section class="flex flex-col justify-center items-center gap-8">
    <!-- <BaseCancelled v-if="cancelled.length" :cancelled_artist="cancelled" /> -->
    <article v-if="artists.length" class="block-artist-grid">
      <div v-if="error">
        {{ error }}
      </div>
      <BaseArtist
        v-if="artists.length"
        v-for="(artist, index) in artists"
        :key="index"
        :name="artist.name"
        :subartist="artist.subtitle"
        :artist-cover="artist.image"
        :cancelled="artist.cancelled"
        @click="router.push(`/artist/${artist.identifier}`)"
      />
    </article>
    <article v-if="!artists.length" class="block-artist-grid-no-artist">
      <h2>Kunstnere kommer snart!</h2>
    </article>
  </section>
</template>

<style>
.block-artist-grid {
  @apply grid gap-16 container mx-auto px-8;
  @apply grid-cols-1 lg:grid-cols-2 xl:grid-cols-3;
}

.block-artist-grid-no-artist {
  @apply p-16 text-4xl;
}
</style>
