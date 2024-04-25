import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CompoundInfoPage from '@/views/CompoundInfoPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/compound-info-page/:compoundName',
    name: 'CompoundInfoPage',
    component: CompoundInfoPage,
    props: true,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicyPage',
    component: PrivacyPolicyPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;