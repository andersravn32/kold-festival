<script setup>
const supabase = useSupabaseClient();

const { data } = await supabase
  .from("general")
  .select("*")
  .eq("element", "mainButton")
  .single();

const props = defineProps({
  data: {
    type: Object,
    default: {
      title: null,
      link: null,
    }
  }
})

// Store component loading state
const loading = ref(false);

const element = ref({
  ...props.data,
  ...data
});

/* const update = () => {
  return emit("update", {
    ...data.value
  });
}; */

// Define component emits
const emit = defineEmits(['done']);

const edit = async () => {
    // Update loading state
    loading.value = true;

    console.log(element.value.data)

    const { data, error } = await supabase.from("general").update({
        data: element.value.data
    }).eq("id", element.value.id).select();

    // Update loading state
    loading.value = false;

    // Return done event with either data or error
    /* return emit('done', data || error); */
}

</script>

<template>
  <div id="form-block-data-hero">
    <h2>Køb knap</h2>
    <form id="form-block-edit" @submit.prevent="edit">
        <div class="input">
          <label>Titel / Tekst</label>
          <input v-model="element.data.title" @change="update" type="text" placeholder="Indtast tekst" />
        </div>
        <div class="input">
          <label>Link</label>
          <input v-model="element.data.link" @change="update" placeholder="Indtast link" />
        </div>
        <!-- <div class="checkbox">
            <input v-model="block.visible" type="checkbox">
            <label>Offentliggør</label>
        </div> -->
        <BaseButton :loading="loading">Gem ændringer</BaseButton>
    </form>
    
  </div>
</template>

<style>
#form-block-data-hero {
  @apply flex flex-col space-y-2 gap-4;
}

#form-block-data-hero .input {
@apply flex flex-col space-y-4;  
  color-scheme: dark;
}
</style>