<script setup>
const imageSelector = useImageSelector();

const emit = defineEmits(["update"]);

const props = defineProps({
  data: {
    type: Object,
    default: {
      bg: null,
      html: null,
    }
  }
})

const data = ref({
  ...props.data
});

const update = () => {
  return emit("update", {
    ...data.value,
  });
};
</script>

<template>
  <div id="form-block-data-header">
    <div class="input">
      <label>Baggrundsbillede URL <span class="cursor-pointer underline" @click="imageSelector.toggle()"
          >(Vælg billede)</span
        ></label>
      <input v-model="data.bg" @change="update" type="text" placeholder="Indtast link" />
    </div>
    <div class="input">
      <label>Indhold</label>
      <textarea class="h-32" v-model="data.html" @change="update" placeholder="Indtast indhold"></textarea>
    </div>
  </div>
</template>

<style>
#form-block-data-header {
  @apply flex flex-col space-y-2;
}
</style>
