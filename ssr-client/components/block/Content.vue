<script setup>
const router = useRouter();
const supabase = useSupabaseClient();

const blocks = ref(null);

const { data } = await supabase
  .from("blocks")
  .select("*")
  .eq("link", router.currentRoute.value.path);

blocks.value = data;
</script>

<template>
  <div>
    <div class="block-content" v-for="block in blocks">
      <BlockHero v-if="block.type == 'hero'" :data="block.data" />
      <BlockContainer v-if="block.type == 'container'" :data="block.data" />
      <BlockAccordion v-if="block.type == 'accordion'" :data="block.data" />
      <BlockHeader v-if="block.type == 'header'" :data="block.data" />
      <BlockArtistGrid v-if="block.type == 'artist-grid'" :data="block.data" />
      <BlockBanner v-if="block.type == 'banner'" :data="block.data" />
    </div>
  </div>
</template>
