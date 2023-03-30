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
    type: Number,
    required: true,
  },
  studentPrice: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    default: 'https://tix.dk/da/musikkolding/buyingflow/tickets/15815/23040/'
  }
});
</script>

<template>
  <a class="price" :href="link" target="_blank">
    <div>
      <h3 v-if="title" class="text-4xl text-center">{{ title }}</h3>
      <p v-if="subtitle" class="text-xs text-center font-body font-bold uppercase">{{ subtitle }}</p>
    </div>
    <div class="text-center space-y-4">
      <h4>Student / Ung</h4>
      <span>{{ studentPrice }} kr.</span>
      <h4>Normal</h4>
      <span>{{ price }} kr.</span>
    </div>
  </a>
</template>

<style>
.price {
  @apply border-2 border-white p-8 flex flex-col justify-center items-center text-white space-y-4 hover:bg-blue-600/50;
}

.price h4{
  @apply text-xl font-body font-bold;
}

.price span{
  @apply text-5xl font-body font-bold;
}
</style>
