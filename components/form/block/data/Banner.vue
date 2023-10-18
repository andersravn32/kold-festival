<script setup>
const emit = defineEmits(["update"]);

const props = defineProps({
    data: {
        type: Object,
        default: {
            word: null
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
    <div id="form-block-data-banner">
        <div class="input">
            <label>Ord</label>
            <input v-model="data.word" @change="update" type="text" placeholder="Indtast ord til banner" required/>
            <p>Bemærk: Hver side er begrænset til et banner</p>
        </div>
    </div>
</template>

<style>
#form-block-data-banner {
    @apply flex flex-col space-y-2;
}
</style>
