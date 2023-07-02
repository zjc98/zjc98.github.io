<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import MainView from './components/MainView.vue';
import FooterView from './components/FooterView.vue';
import HeaderView from './components/HeaderView.vue';
</script>

<template>
  <header>
    <HeaderView />
  </header>
  <main>
    <div>
      <SideBar id="sidebar" />
      <MainView />
    </div>
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<style>
:root {
  --text-color: rgb(73, 78, 82);
  --link-color: #5e9cee;
  --text-color-dark: #d6d6d6;
  --link-color-dark: rgb(230, 230, 230);
  --background-color-dark: #1f1f1f;
}

html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--text-color);
  text-decoration-color: var(--link-color);
  width: 100%;
}

header {
  display: flex;
  justify-content: center;
}

#app {
  width: 100%;
}

a {
  color: var(--text-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
}

main > div {
  max-width: 1024px;
  width: 100%;
}

.dark-mode {
  color: var(--text-color-dark);
  background-color: var(--background-color-dark);
}

.dark-mode a {
  color: var(--link-color-dark);
}
</style>
