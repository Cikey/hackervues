import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import TopPosts from './components/TopPosts.vue';
import NewPosts from './components/NewPosts.vue';
import ShowPosts from './components/ShowPosts.vue';
import AskPosts from './components/AskPosts.vue';
import './assets/style.css';

const routes = [
  { path: '/', component: TopPosts },
  { path: '/new', component: NewPosts },
  { path: '/show', component: ShowPosts },
  { path: '/ask', component: AskPosts }
];

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.PUBLIC_PATH,
  routes
});

createApp(App)
  .use(router)
  .mount('#app');
