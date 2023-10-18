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
  <div class="block-prices">
    <BasePrice title="Partout" :price="300" :studentPrice="175" />
    <BasePrice title="Fredag" :price="175" :studentPrice="100" />
    <BasePrice
      title="Lørdag"
      subtitle="(OBS) Gælder ikke Ude af Kontrol"
      :price="175"
      :studentPrice="100"
    ></BasePrice>
    <div class="price bg-blue-600/50 text-center">
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
  @apply container mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-4 px-8;
}
</style>