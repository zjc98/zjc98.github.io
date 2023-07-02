import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLocationPin,
  faEnvelope,
  faHome,
  faFilePdf,
  faFile,
  faFileContract,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add(
  faGithub,
  faLocationPin,
  faLinkedin,
  faEnvelope,
  faHome,
  faFilePdf,
  faFile,
  faFileContract,
  faGraduationCap
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
