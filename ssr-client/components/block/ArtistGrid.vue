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
const artists = ref(data);

/* const cancelled = artists.value.filter(artist => {
  return artist.cancelled === true
}) */

</script>

<template>
  <section class="flex flex-col justify-center items-center gap-8">
  <!-- <BaseCancelled v-if="cancelled.length" :cancelled_artist="cancelled" /> -->
  <article class="block-artist-grid">
    <div v-if="error">
      {{ error }}
    </div>
    <BaseArtist
      v-if="artists.length"
      v-for="(artist, index) in artists.filter((artist) => {
        return artist.date.split('-')[0] == props.data.year
      })"
      :key="index"
      :name="artist.name"
      :subartist="artist.subtitle"
      :artist-cover="artist.image"
      :cancelled="artist.cancelled"
      @click="router.push(`/artist/${artist.identifier}`)"
    />
  </article>
</section>
</template>

<style>

.block-artist-grid {
  @apply grid gap-16 container mx-auto px-8;
  @apply grid-cols-1 lg:grid-cols-2 xl:grid-cols-3;
}

</style>
