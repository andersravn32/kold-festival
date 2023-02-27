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
  sidebar.component.value = FormBlockEdit;
  sidebar.show.value = true;
}

const remove = (block) => {

}
</script>

<template>
  <div>
    <Block v-for="block in blocks" :key="block.id" @edit="edit(block)" @remove="remove(block)">
      <BlockHero v-if="block.type == 'hero'" :data="block.data" />
      <BlockContainer v-if="block.type == 'container'" :data="block.data" />
      <BlockAccordion v-if="block.type == 'accordion'" :data="block.data" />
      <BlockHeader v-if="block.type == 'header'" :data="block.data" />
      <BlockArtistGrid v-if="block.type == 'artist-grid'" :data="block.data" />
      <BlockBanner v-if="block.type == 'banner'" :data="block.data" />
    </Block>
  </div>
</template>
