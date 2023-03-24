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
</script>

<template>
  <section class="block-artist-grid">
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
      :artist-cover="artist.header"
      @click="router.push(`/artist/${artist.identifier}`)"
    />
  </section>
</template>
