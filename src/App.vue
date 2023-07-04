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
  --background-color: #ffffff;
}

html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--text-color);
  text-decoration-color: var(--link-color);
  width: 100%;
  font-family: optima, Optima Bold, Microsoft YaHei, Times New Roman, Times, serif;
}

header {
  display: flex;
  justify-content: center;
  padding: 0px 16px;
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

@media screen and (max-width: 640px) {
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@keyframes switch-theme-light {
  0% {
    background-color: var(--background-color-dark);
    color: var(--text-color-dark);
  }
  100% {
    background-color: var(--background-color);
    color: var(--text-color);
  }
}

@keyframes switch-theme-dark {
  0% {
    background-color: var(--background-color);
    color: var(--text-color);
  }
  100% {
    background-color: var(--background-color-dark);
    color: var(--text-color-dark);
  }
}

.light-mode {
  color: var(--text-color);
  background-color: (--background-color);
  animation: switch-theme-light 0.5s linear;
}

.dark-mode a {
  color: var(--link-color);
}

.dark-mode {
  color: var(--text-color-dark);
  background-color: var(--background-color-dark);
  animation: switch-theme-dark 0.5s linear;
}

.dark-mode a {
  color: var(--link-color-dark);
}
</style>
