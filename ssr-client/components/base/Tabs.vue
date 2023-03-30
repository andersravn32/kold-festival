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

// Define selected title from titles array, based on props
const selectedTitle = ref(tabs.value[0].props.title);

// Provide selectedTitle data to component children
provide("selectedTitle", selectedTitle);
</script>

<template>
  <div class="tabs">
    <ul v-if="showTitles" class="tabs-titles">
      <li
        v-for="tab in tabs"
        @click="selectedTitle = tab.props.title"
        class="tab-title mb-4"
        :class="{ 'tab-active': tab.props.title == selectedTitle }"
      >
        {{ tab.props.title }}
      </li>
    </ul>

    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>
