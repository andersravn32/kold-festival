<script setup>
const emit = defineEmits(["update"]);
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const supabase = useSupabaseClient();

const { data } = await supabase.from("partnere").select().order("order", { ascending: 'true' });
const partners = ref(data);
console.log(partners.value)

async function updateList() {
    const sortableList = [...document.querySelectorAll('.partnerItem')]

    sortableList.forEach(async (item, index) => {
        const currentPartner = partners.value.find(partner => partner.name === item.dataset.name)
        const { error } = await supabase
            .from('countries')
            .update({ order: (index + 1) })
            .eq('name', currentPartner.name)
    })
    
    const { data } = await supabase.from("partnere").select().order("order", { ascending: 'true' });
    partners.value = data
}

function dragStart(e) {
    e.target.classList.add('dragging')
}

function dragOver(e) {
    const sortableList = document.querySelector('.partnerList')
    const draggingItem = document.querySelector('.dragging')
    const siblings = [...document.querySelectorAll('.partnerItem:not(.dragging)')]

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    })
    
    sortableList.insertBefore(draggingItem, nextSibling)
}

function dragEnter(e) {

}

function dragEnd(e) {
    e.target.classList.remove('dragging')
    updateList()
}

</script>

<template>
  <div id="form-block-data-hero">
    <h2 class=" text-2xl">Partnere</h2>
    <div class="flex flex-col border p-4 space-y-4 partnerList">
        <p v-if="!partners.length">Ingen partnere</p>
        <div 
            class="partnerItem" 
            v-else 
            v-for="(partner, index) in partners"
            :key="index"
            :data-name="partner.name"
            draggable="true"
            :ondragstart="dragStart"
            :ondragenter="dragEnter"
            :ondragover="dragOver"
            :ondragend="dragEnd"
        >
            <img :src="partner.logo" class="w-6 object-cover">
            <p class="text-lg">{{ partner.name }}</p>
            <p class="ml-auto">{{ partner.order }}</p>
            <Bars3Icon class="h-6 w-6" />
            <!-- <XMarkIcon class="h-6 w-6 cursor-pointer hover:text-red-600" /> -->
        </div>
    </div>
    <BaseButton @click.prevent="data.prices.push(newPrice)">Tilføj ny partner</BaseButton>
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

.partnerItem {
    @apply bg-indigo-500 p-2 flex items-center gap-2 cursor-grab;
}

.partnerItem.dragging {
    @apply bg-transparent border p-2 flex items-center gap-2 cursor-grab;
}
</style>