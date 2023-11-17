<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  price: {
  type: Object,
  required: true,
  default: {
      normal: null,
      discount: null,
      titleNormal: null,
      titleDiscount: null
  }
  },
  link: {
    type: String,
    default: 'https://tix.dk/da/musikkolding/buyingflow/tickets/19199/37735/'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <a class="price" :class="{'disabled': disabled }" :href="(link) ? link : 'https://tix.dk/da/musikkolding/buyingflow/tickets/19199/37735/'" target="_blank">
    <span v-if="disabled" class="disabledBanner">
      <p class="cancelled-text">TBA</p>
    </span>
    <div>
      <h3 v-if="title" class="text-4xl text-center" :class="{'opacity-70': disabled }">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-center font-body font-bold uppercase" :class="{'opacity-70': disabled }">{{ subtitle }}</p>
    </div>
    <div class="text-center space-y-4 priceList" :class="{'opacity-70': disabled }">
      <h4 v-if="price.titleDiscount">{{ price.titleDiscount }}</h4>
      <p v-if="price.discount">{{ price.discount }} kr.</p>
      <h4 v-if="price.titleNormal">{{ price.titleNormal }}</h4>
      <p v-if="price.normal">{{ price.normal }} kr.</p>
    </div>
  </a>
</template>

<style>
.price {
  @apply border-2 border-white p-8 flex flex-col justify-center items-center text-white space-y-4 hover:bg-blue-600/50 relative cursor-pointer;
}

.disabled {
  @apply pointer-events-none;
}

.disabledBanner {
  @apply absolute z-10 h-full w-full transition-all duration-150 ease-in-out overflow-hidden;
}

.cancelled-text {
  @apply font-header font-bold absolute translate-x-1/2 right-12 top-6 rotate-45 text-center bg-accent text-zinc-50 text-xs md:text-lg py-2 w-[1000px] mx-auto ;
}

.price h4{
  @apply text-xl font-body font-bold;
}

.priceList p{
  @apply text-5xl font-body font-bold;
}
</style>
