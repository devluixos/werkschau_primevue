import { createRouter, createWebHistory } from 'vue-router';
import IntroductionProblemSpace from '../components/IntroductionProblemSpace.vue';
import ChapterLiteratureReview from '../components/ChapterLiteratureReview.vue';
import ChapterAbstract from '../components/ChapterAbstract.vue';

const routes = [
  { path: '/chapter1', component: ChapterAbstract },
  { path: '/chapter2', component: IntroductionProblemSpace },
  { path: '/chapter3', component: ChapterLiteratureReview },
  { path: '/:catchAll(.*)', redirect: '/chapter1' } // Redirect to Chapter 1 by default
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
