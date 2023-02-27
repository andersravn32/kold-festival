<script setup>
const emit = defineEmits(["update"]);

const props = defineProps({
    data: {
        type: Object,
        default: {
            html: [],
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
    <div id="form-block-data-container">
        <div v-if="!data.html.length" class="h-32 flex items-center flex-col justify-center">
            <h2>Fandt ingen kolonner</h2>
            <BaseButton @click.prevent="data.html.push(null)">Tilføj kolonne</BaseButton>
        </div>

        <div class="flex flex-col space-y-2" v-if="data.html.length">
            <div class="flex flex-col space-y-2" v-for="(column, index) in data.html" :key="index">
                <label class="flex items-center justify-between"><span>Kolonne {{ index }} indhold</span><span
                        @click="data.html.splice(index, 1)">Slet</span></label>
                <textarea class="h-32" v-model="data.html[index]" @change="update">{{
                    column
                }}</textarea>
            </div>
            <BaseButton @click.prevent="data.html.push(null)">Tilføj kolonne</BaseButton>
        </div>
    </div>
</template>
