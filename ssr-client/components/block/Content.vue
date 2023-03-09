<script setup>
import FormBlockEdit from "../form/block/Edit.vue";

const router = useRouter();
const supabase = useSupabaseClient();
const sidebar = useSidebar();

const blocks = ref(null);

const { data } = await supabase
  .from("blocks")
  .select("*")
  .eq("link", router.currentRoute.value.path).order("id", { ascending: true });

blocks.value = data;

const edit = (block) => {
  sidebar.editData.value = block;
  sidebar.setComponent(FormBlockEdit);
  sidebar.toggle();
}

const remove = async (block) => {
  if (!confirm("Er du sikker på at du ønsker at slette dette indhold?")) {
    return;
  }

  const { error } = await supabase.from("blocks").delete().eq("id", block.id);
  if (error) {
    return;
  }
  
  blocks.value = blocks.value.filter((loopBlock) => {
    return !(loopBlock.id == block.id)
  })
}
</script>

<template>
  <div class="blocks">
    <Block v-for="block in blocks" :key="block.id" @edit="edit(block)" @remove="remove(block)">
      <BlockHero v-if="block.type == 'hero'" :id="`block-${block.id}`" :data="block.data" />
      <BlockContainer v-if="block.type == 'container'" :id="`block-${block.id}`" :data="block.data" />
      <BlockAccordion v-if="block.type == 'accordion'" :id="`block-${block.id}`" :data="block.data" />
      <BlockHeader v-if="block.type == 'header'" :id="`block-${block.id}`" :data="block.data" />
      <BlockArtistGrid v-if="block.type == 'artist-grid'" :id="`block-${block.id}`" :data="block.data" />
      <BlockBanner v-if="block.type == 'banner'" :id="`block-${block.id}`" :data="block.data" />
      <BlockPrices v-if="block.type == 'prices'" :id="`block-${block.id}`" :data="block.data" />
    </Block>
  </div>
</template>
