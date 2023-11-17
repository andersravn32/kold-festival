<script setup>
import { InformationCircleIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <div 
    class="block-prices grid"
    :class="`md:grid-cols-${((data.prices.length + 1) <= 1) ? '1' : '2'} lg:grid-cols-${(data.prices.length <= 2) ? String(data.prices.length + 1) : '4'}`"
    >
    <BasePrice 
    v-if="data.prices"
    v-for="(price, i) in data.prices"
    :key="i"    
    :title="price.title" 
    :subtitle="price.subtitle"
    :price="price.price" 
    :link="price.link"
    :disabled="price.disabled"
    />
    <div class="price bg-blue-600/50 text-center col-auto">
      <InformationCircleIcon class="w-32 h-32" />
      <h3>Vær opmærksom på..</h3>
      <p class="font-body">
        For at opnå student / ung pris skal man være under 25 år eller have et
        gyldigt studiekort
      </p>
    </div>
  </div>
</template>

<style>
.block-prices {
  @apply container mx-auto gap-4 px-8;
}
</style>