<script setup>
const supabase = useSupabaseClient();
const sidebar = useSidebar();

// Import router from useRouter composable
const router = useRouter();

// Filter routes, based on hidden routes
const routes = router.getRoutes().filter((route) => {
    return !route.meta.hidden
});

// Store component loading state
const loading = ref(false);

// Get block data to edit from sidebar composable
const block = ref(sidebar.editData.value);

// Define component emits
const emit = defineEmits(['done']);

const edit = async () => {
    // Update loading state
    loading.value = true;

    const { data, error } = await supabase.from("blocks").update({
        link: block.value.link,
        link_type: block.value.link_type,
        visible: block.value.visible,
        data: block.value.data,
        type: block.value.type
    }).eq("id", block.value.id).select();

    // Update loading state
    loading.value = false;

    // Return done event with either data or error
    return emit('done', data || error);
}
</script>

<template>
    <div>
        <form id="form-block-edit" @submit.prevent="edit">
            <FormBlockDataHero v-if="block.type == 'hero'" :data="block.data" @update="(e) => { block.data = e }" />
            <FormBlockDataContainer v-if="block.type == 'container'" :data="block.data"
                @update="(e) => { block.data = e }" />
            <FormBlockDataAccordion v-if="block.type == 'accordion'" :data="block.data"
                @update="(e) => { block.data = e }" />
            <FormBlockDataHeader v-if="block.type == 'header'" :data="block.data" @update="(e) => { block.data = e }" />
            <FormBlockDataBanner v-if="block.type == 'banner'" :data="block.data" @update="(e) => { block.data = e }" />

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
            <BaseButton :loading="loading">Gem ændringer</BaseButton>
        </form>
    </div>
</template>

<style>
#form-block-edit {
    @apply flex flex-col space-y-4;
}

#form-block-edit .input {
    @apply flex flex-col space-y-2;
}

#form-block-edit .checkbox {
    @apply flex items-center space-x-2;
}
</style>