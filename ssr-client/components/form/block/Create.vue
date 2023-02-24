<script setup>
const supabase = useSupabaseClient();

// Import router from useRouter composable
const router = useRouter();

// Filter routes, based on hidden routes
const routes = router.getRoutes().filter((route) => {
    return !route.meta.hidden
});

// Loading state
const loading = ref(false);

// Define base block object
const block = ref({
    link: "",
    link_type: "page",
    visible: false,
    data: null,
    type: "",
})

// Define component emits
const emit = defineEmits(['done']);

// Main method for submitting data to database
const create = async () => {
    const { data, error } = await supabase.from("blocks").insert(block.value).select();

    // Return done event with either data or error
    return emit('done', data || error);
}
</script>

<template>
    <div>
        <form id="form-block-create" @submit.prevent="create">
            <h2 class="text-2xl">Opret indhold</h2>
            <div class="input">
                <label>Vælg venligst en type af indhold</label>
                <select v-model="block.type">
                    <option value="">Vælg venligst</option>
                    <option disabled>----</option>
                    <option value="hero">Hero block</option>
                    <option value="container">Indholds block</option>
                    <option value="accordion">Fold-ud block</option>
                </select>
            </div>
            <FormBlockDataHero v-if="block.type == 'hero'" @update="(e) => { block.data = e }" />
            <FormBlockDataContainer v-if="block.type == 'container'" @update="(e) => { block.data = e }" />
            <FormBlockDataAccordion v-if="block.type == 'accordion'" @update="(e) => { block.data = e }" />

            <div class="input">
                <label>På hvilken side skal indholdet placeres?</label>
                <select v-model="block.link">
                    <option value="">Vælg venligst</option>
                    <option disabled>----</option>
                    <option v-for="route in routes" :value="route.path">{{ route.name }}</option>
                </select>
            </div>

            <div class="checkbox">
                <input v-model="block.visible" type="checkbox">
                <label>Offentliggør</label>
            </div>
            <BaseButton :loading="loading">Opret indhold</BaseButton>
        </form>
    </div>
</template>

<style>
#form-block-create {
    @apply flex flex-col space-y-4;
}

#form-block-create .input {
    @apply flex flex-col space-y-2;
}

#form-block-create .checkbox {
    @apply flex items-center space-x-2;
}
</style>