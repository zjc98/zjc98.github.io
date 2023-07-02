<template>
  <div class="footer" :class="{ dark: isDark }">
    <div class="follow-me">
      <span>FOLLOW: </span>
      <!-- <img :src="githubIcon" alt="github" /> -->
      <span style="margin: 0px 5px">
        <IconView type="github" />
      </span>
      <a href="http://github.com/czh-98">GITHUB</a>
    </div>
    <div>© 2023 Zenghao Chai. Powered by Jekyll & AcademicPages, a fork of Minimal Mistakes.</div>
  </div>
</template>

<script setup lang="ts">
import IconView from './IconView.vue';
import { state } from '@/store';
import { computed } from 'vue';

const isDark = computed(() => state.theme === 'dark');
</script>

<style scoped>
.footer {
  padding: 2rem;
  background-color: rgb(243, 243, 243);
  font-size: 12px;
}

.dark {
  background-color: rgb(56, 56, 56);
}

.follow-me {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
}

.follow-me img {
  height: 16px;
  margin-right: 2.5px;
  margin-left: 0.5rem;
}
</style>
