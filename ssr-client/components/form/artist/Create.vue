<script setup>
const supabase = useSupabaseClient();
const modal = useModal();
const sidebar = useSidebar();

const artist = ref({
    name: null,
    subtitle: null,
    identifier: null,
    type: "",
    date: new Date().toISOString().split("T")[0],
    location: null,
    image: null,
    header: null,
    body: null,
    public: null
})

// Loading state
const loading = ref(false);

const create = async () => {
    if (loading.value) {
        return;
    }

    // Update loading state
    loading.value = true;

    // Insert artists and select new rows
    const request = await supabase.from("artists").insert(artist.value);

    // Error handling
    if (request.error) {
        modal.setComponent(h("div", { class: "w-full max-w-4xl flex flex-col items-center justify-center" }, [h("h3", { class: "text-2xl" }, "Der er sket en fejl"), h("p", { class: "mb-2" }, "Der er sket en fejl under oprettelsen af en ny kunstner"), h("p", { class: "opacity-50 text-xs" }, `Fejlkode: ${JSON.stringify(request.error)}`)]));

        // Update loading state
        loading.value = false;

        return modal.toggle();
    }

    modal.setComponent(h("div", { class: "w-full max-w-xl flex flex-col items-center justify-center" }, [h("h3", { class: "text-2xl" }, "Succes"), h("p", "Du har nu oprettet en ny kunstner")]))
    // Update loading state
    loading.value = false;

    modal.toggle();
    sidebar.toggle();
}
</script>

<template>
    <form id="form-artist-create" @submit.prevent="create">
        <h2 class="text-2xl">Opret ny kunster</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="input">
                <label>Navn</label>
                <input v-model="artist.name" type="text" placeholder="Indtast kunsternavn" />
            </div>
            <div class="input">
                <label>Undertitel</label>
                <input v-model="artist.subtitle" type="text" placeholder="Indtast undertitel" />
            </div>
            <div class="input">
                <label>Identifikation</label>
                <input v-model="artist.identifier" type="text" placeholder="F.eks ude-af-kontrol" />
            </div>
            <div class="input">
                <label>Type</label>
                <select v-model="artist.type">
                    <option value="">Vælg venligst</option>
                    <option value="concert">Koncert</option>
                    <option value="talk">Talk</option>
                </select>
            </div>
            <div class="input">
                <label>Dato</label>
                <input v-model="artist.date" type="date" />
            </div>
            <div class="input">
                <label>Lokation</label>
                <input v-model="artist.location" type="text" placeholder="Indtast lokation" />
            </div>
        </div>
        <div class="input">
            <label>Kunsterbillede</label>
            <input v-model="artist.image" type="text" placeholder="Indtast link til kunstnertitel" />
        </div>
        <div class="input">
            <label>Header billede</label>
            <input v-model="artist.header" type="text" placeholder="Indtast link til header billede" />
        </div>
        <div class="input">
            <label>Beskrivelse</label>
            <textarea v-model="artist.body" class="h-64" placeholder="Indtast beskrivelse som HTML"></textarea>
        </div>
        <div class="checkbox">
            <input v-model="artist.public" type="checkbox">
            <label>Offentliggør</label>
        </div>
        <BaseButton :loading="loading">Opret ny kunstner</BaseButton>
    </form>
</template>

<style>
#form-artist-create {
    @apply flex flex-col space-y-4;
}

#form-artist-create .input {
    @apply flex flex-col space-y-2;
}

#form-artist-create .checkbox {
    @apply flex items-center space-x-2;
}
</style>