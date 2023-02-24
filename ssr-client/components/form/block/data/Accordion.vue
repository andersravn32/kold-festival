<script setup>
const emit = defineEmits(["update"]);

const data = ref({
  title: null,
  content: null,
  open: false,
});

const update = () => {
  return emit("update", {
    ...data.value,
  });
};
</script>

<template>
  <div id="form-block-data-accordion">
    <div class="input">
      <label>Titel</label>
      <input v-model="data.title" @change="update" type="text" placeholder="Indtast titel"/>
    </div>
    <div class="input">
      <label>Indhold</label>
      <textarea class="h-32" v-model="data.content" @change="update" placeholder="Indtast indhold"></textarea>
    </div>
    
    <div class="checkbox">
        <input v-model="data.open" @change="update" type="checkbox" />
        <label>Åben fold-ud boks</label>
      </div>
  </div>
</template>

<style>
#form-block-data-accordion {
  @apply flex flex-col space-y-2;
}
</style>
