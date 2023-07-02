<template>
  <div v-if="props.type === 'location'">
    <font-awesome-icon v-if="isDark" icon="location-pin" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="location-pin" />
  </div>
  <div v-else-if="props.type === 'email'">
    <font-awesome-icon v-if="isDark" icon="envelope" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="envelope" />
  </div>
  <div v-else-if="props.type === 'linkedin'">
    <font-awesome-icon v-if="isDark" icon="fa-brands fa-linkedin" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="fa-brands fa-linkedin" />
  </div>
  <div v-else-if="props.type === 'github'">
    <font-awesome-icon v-if="isDark" icon="fa-brands fa-github" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="fa-brands fa-github" />
  </div>
  <div v-else-if="props.type === 'graduation'">
    <font-awesome-icon v-if="isDark" icon="fa-solid fa-graduation-cap" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="fa-solid fa-graduation-cap" />
  </div>
  <div v-else-if="props.type === 'pdf'">
    <font-awesome-icon v-if="isDark" icon="file-pdf" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="file-pdf" />
  </div>
  <div v-else-if="props.type === 'supp'">
    <font-awesome-icon v-if="isDark" icon="file" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="file" />
  </div>
  <div v-else-if="props.type === 'poster'">
    <font-awesome-icon v-if="isDark" icon="fa-file-contract" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="fa-file-contract" />
  </div>
  <div v-if="props.type === 'arxiv'">
    <!-- <font-awesome-icon v-if="isDark" icon="fa-file-contrast" style="color: #d6d6d6" /> -->
    <!-- <font-awesome-icon v-else icon="fa-file-contrast" /> -->
    <i class="ai ai-arxiv" />
  </div>
  <div v-if="props.type === 'home'">
    <!-- <font-awesome-icon icon="fa-solid fa-house" /> -->
    <font-awesome-icon v-if="isDark" icon="fa-solid fa-house" style="color: #d6d6d6" />
    <font-awesome-icon v-else icon="fa-solid fa-house" />
    <!-- <font-awesome-icon v-else icon="fa-file-contrast" /> -->
    <!-- <i class="ai ai-arxiv" /> -->
  </div>
  <div v-if="props.type === 'ieee'">
    <!-- <font-awesome-icon v-if="isDark" icon="fa-file-contrast" style="color: #d6d6d6" /> -->
    <!-- <font-awesome-icon v-else icon="fa-file-contrast" /> -->
    <i class="ai ai-ieee" />
  </div>
  <div v-if="props.type === 'openreview'">
    <img src="@/assets/openreview.png" alt="openreview" />
  </div>
  <div v-if="props.type === 'springer'">
    <i class="ai ai-springer" />
  </div>
  <div v-if="props.type === 'frontiers'">
    <img src="@/assets/frontier.ico" alt="frontiers" />
  </div>
</template>

<script setup lang="ts">
import { state } from '@/store';
import { computed } from 'vue';

const isDark = computed(() => state.theme === 'dark');

const props = defineProps<{
  type: string;
}>();
</script>

<style scoped>
img {
  height: 12px;
}
</style>
