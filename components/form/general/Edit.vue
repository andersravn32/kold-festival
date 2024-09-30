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
const element = ref(sidebar.editData.value);

// Define component emits
const emit = defineEmits(['done']);

const edit = async () => {
    // Update loading state
    loading.value = true;

    const { data, error } = await supabase.from("general").update({
        data: element.value.data
    }).eq("id", element.value.id).select();

    // Update loading state
    loading.value = false;

    // Return done event with either data or error
    return emit('done', data || error);
}
</script>

<template>
    <div>
        <form id="form-block-edit" @submit.prevent="edit">
            <FormGeneralDataMainButton v-if="element.element == 'mainButton'" :data="element.data" @update="(e) => { element.data = e }" />

            <!-- <div class="checkbox">
                <input v-model="block.visible" type="checkbox">
                <label>Offentliggør</label>
            </div> -->
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