<script setup>
const emit = defineEmits(["update"]);

const props = defineProps({
  data: {
    type: Object,
    default: {
      year: null,
    },
  },
});

const data = ref({
  ...props.data,
});

const update = () => {
  return emit("update", {
    ...data.value,
  });
};
</script>

<template>
  <div id="form-block-data-artist-grid">
    <div class="input">
      <label>Årstal</label>
      <input
        v-model="data.year"
        @change="update"
        type="text"
        placeholder="Indtast et årstal" required
      />
      <p>Bemærk: Kunsterne bliver sorteret efter dette årstal</p>
    </div>
  </div>
</template>

<style>
#form-block-data-artist-grid {
  @apply flex flex-col space-y-2;
}
</style>
