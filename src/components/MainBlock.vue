<template>
  <div class="main-block">
    <h2>{{ props.title }}</h2>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<style scoped>
.main-block {
  line-height: 2rem;
}
.main-block h2 {
  margin-top: 3rem;
}
</style>
