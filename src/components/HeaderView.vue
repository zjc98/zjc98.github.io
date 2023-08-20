<template>
  <div class="header">
    <div>JICHONG ZHOU</div>
    <img v-if="state.theme === 'day'" src="@/assets/sun-solid.svg" alt="sun" @click="changeMode" />
    <img
      v-else-if="state.theme === 'dark'"
      src="@/assets/moon-solid.svg"
      alt="moon"
      @click="changeMode"
    />
  </div>
</template>

<script setup lang="ts">
import { state } from '@/store';
import { onMounted } from 'vue';

function changeMode() {
  if (state.theme === 'day') {
    state.theme = 'dark';
    const body = document.querySelector('body');
    body?.classList.remove('light-mode');
    body?.classList.add('dark-mode');
  } else {
    state.theme = 'day';
    const body = document.querySelector('body');
    body?.classList.remove('dark-mode');
    body?.classList.add('light-mode');
  }
}

onMounted(() => {
  const body = document.querySelector('body');
  // 默认黑色主题
  // state.theme = 'dark';
  // body?.classList.add('dark-mode');

  // 默认白色主题
  state.theme = 'day';
  body?.classList.add('light-mode');
});
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
  max-width: 1024px;
}

.header > div {
  font-weight: bold;
}

.header img {
  height: 1.5rem;
  cursor: pointer;
}
</style>
