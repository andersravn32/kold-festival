<script setup>
import { ref, useSlots, provide } from "vue";

// Get slots form composable
const slots = useSlots();

// Define component props
const props = defineProps({
  showTitles: {
    type: Boolean,
    default: true,
  },

  index: {
    type: Number,
    default: 0,
  },
});

// Get tabs
const tabs = ref(slots.default());

// Map tab titles to array
const titles = tabs.value.map((tab) => tab.props.title);

// Define selected title from titles array, based on props
const selectedTitle = ref(titles[props.index]);

// Provide selectedTitle data to component children
provide("selectedTitle", selectedTitle)
</script>

<template>
  <div class="tabs">
    <ul v-if="showTitles" class="tabs-titles">
      <li v-for="title in titles" @click="selectedTitle = title">
        {{ title }}
      </li>
    </ul>

    <div class="tabs-content">
        <slot/>
    </div>
  </div>
</template>
