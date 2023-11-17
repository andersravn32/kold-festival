<script setup>
const emit = defineEmits(["update"]);

const props = defineProps({
  data: {
    type: Object,
    default: {
        prices: []
    },
  },
});

const newPrice = {
    id: Math.floor(Math.random() * Date.now()),
    title: '',
    subtitle: '',
    price: {
        normal: '',
        discount: '',
        titleNormal: '',
        titleDiscount: ''
    },
    link: null,
    disabled: false
}

const data = ref({
  ...props.data,
});

const update = () => {
  return emit("update", {
    ...data.value
  });
};

</script>

<template>
  <div id="form-block-data-hero">
    <div v-if="!data.prices.length" class="h-32 flex items-center flex-col justify-center">
        <h2>Ingen priser tilføjet</h2>
        <BaseButton @click.prevent="data.value.prices.push(newPrice)">Tilføj pris</BaseButton>
    </div>
    <div class="flex flex-col space-y-2" v-if="data.prices.length">
            <div class="grid grid-cols-2 gap-4 border p-4" v-for="(price, index) in data.prices" :key="index">
                <label class="flex items-center justify-between col-span-2 pr-4"><span>Box {{ index + 1 }}</span>
                    <span @click="() => { data.prices.splice(index, 1); update; }" class="cursor-pointer hover:underline">Slet</span></label>
                <div class="input col-span-2">
                    <label>Titel</label>
                    <input type="text" name="title" v-model="price.title" @change="update(price)" placeholder="Titel" />
                </div>
                <div class="input col-span-2">
                    <label>Undertitel</label>
                    <input type="text" v-model="price.subtitle" @change="update" placeholder="Undertitel" />
                </div>
                <h2 class="col-span-2">Priser</h2>
                <div class="flex flex-col gap-4">
                    <span class="input">
                        <label>Normal pris</label>
                        <input type="text" v-model="price.price.normal" @change="update" placeholder="Normal pris" />
                    </span>
                    <span class="input">
                        <label>Titel</label>
                        <input type="text" v-model="price.price.titleNormal" @change="update" placeholder="Titel til normal pris" />
                    </span>
                </div>
                <div class="flex flex-col gap-4">
                    <span class="input">
                        <label>Rabat pris</label>
                        <input type="text"  v-model="price.price.discount" @change="update" placeholder="Rabat pris" />
                    </span>
                    <span class="input">
                        <label>Titel</label>
                        <input type="text"  v-model="price.price.titleDiscount" @change="update" placeholder="Titel til rabat pris" />
                    </span>
                </div>
                <h2 class="col-span-2">Funktioner</h2>
                <div class="input col-span-2">
                    <label>Link (Efterlad tom for at bruge standard link)</label>
                    <input type="text"  v-model="price.link" @change="update" placeholder="Link til billet" />
                </div>
                <div class="flex items-center gap-2">
                    <label>Slå fra</label>
                    <input type="checkbox" v-model="price.disabled" @change="update" />
                </div>
            </div>
        <BaseButton @click.prevent="data.prices.push(newPrice)">Tilføj pris</BaseButton>
    </div>
  </div>
</template>

<style>
#form-block-data-hero {
  @apply flex flex-col space-y-2;
}

#form-block-data-hero .input {
@apply flex flex-col space-y-4;  
  color-scheme: dark;
}
</style>