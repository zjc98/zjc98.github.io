<template>
  <div class="sidebar">
    <div class="profile">
      <img src="@/assets/profile.png" alt="Zenghao Chai" class="avatar" />
      <div class="name">Zenghao Chai</div>
      <div class="degree">Ph.D. Student</div>
    </div>
    <div class="extern">
      <div class="link" v-for="(item, index) in externLinks" :key="index">
        <!-- <img :src="item.icon" alt="" /> -->
        <div class="icon-container">
          <IconView :type="item.icon" />
        </div>

        <a :href="item.link" target="_blank">{{ item.text }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconView from './IconView.vue';
import { computed } from 'vue';

const externLinks = computed(() => [
  {
    icon: 'location',
    text: 'NUS, Singapore',
    link: 'https://nus.edu.sg/'
  },
  {
    icon: 'email',
    text: 'Email',
    link: 'mailto:zenghaochai@gmail.com'
  },
  {
    icon: 'linkedin',
    text: 'Linkedin',
    link: 'https://www.linkedin.com/in/zenghaochai'
  },
  {
    icon: 'github',
    text: 'Github',
    link: 'https://github.com/czh-98'
  },
  {
    icon: 'graduation',
    text: 'Google Scholar',
    link: 'https://scholar.google.com/citations?user=0n4SuDUAAAAJ'
  }
]);
</script>

<style scoped>
.sidebar {
  position: fixed;
}

.profile img {
  width: 100%;
  max-width: 175px;
  border-radius: 50%;
  border: 1px solid #f2f3f3;
}

.profile .name {
  font-size: 18px;
  font-weight: 700;
}

.profile .degree {
  font-size: 14px;
  margin-top: 10px;
}

.extern {
  margin-top: 1rem;
}

.extern .link {
  display: flex;
  align-items: center;
  line-height: 2rem;
}

.extern .link:not(:first-child) {
  margin-top: 0.5rem;
}

.extern img {
  height: 13.5px;
  width: 17.5px;
}

.extern a {
  margin-left: 0.5rem;
  font-size: 14px;
  white-space: nowrap;
}

.extern .icon-container {
  width: 20px;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 640px) {
  .sidebar {
    position: relative;
    width: 100%;
    text-align: center;
  }

  .profile .name,
  .profile .degree {
    text-align: center;
  }

  .extern {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .extern .link:not(:first-child) {
    margin-top: 0;
    margin-left: 1rem;
  }
}
</style>
