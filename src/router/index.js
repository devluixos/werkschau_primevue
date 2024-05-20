import { createRouter, createWebHistory } from 'vue-router';
import IntroductionProblemSpace from '../components/IntroductionProblemSpace.vue';
import ChapterAbstract from '../components/ChapterAbstract.vue';
import IntroductionResearchGap from '../components/IntroductionResearchGap.vue';
import IntroductionStakeholder from '../components/IntroductionStakeholder.vue';
import IntroductionRisks from '../components/IntroductionRisks.vue';
import SotaTheoryofVis from '../components/SotaTheoryofVis.vue';
import SotaTheoryofVis2 from '../components/SotaTheoryofVis2.vue';
import SotaEstablished from '../components/SotaEstablished.vue';
import SotaNiklas from '../components/SotaNiklas.vue';
import SotaTiago from '../components/SotaTiago.vue';
import SotaObsidian from '../components/SotaObsidian';
import SotaImplic from '../components/SotaImplic.vue';



const routes = [
  { path: '/chapter1', component: ChapterAbstract },
  { path: '/chapter2', component: IntroductionProblemSpace },
  { path: '/chapter3', component: IntroductionResearchGap },
  { path: '/chapter4', component: IntroductionStakeholder },
  { path: '/chapter5', component: IntroductionRisks },
  { path: '/chapter6', component: SotaTheoryofVis },
  { path: '/chapter7', component: SotaTheoryofVis2 },
  { path: '/chapter8', component: SotaEstablished },
  { path: '/chapter9', component: SotaNiklas },
  { path: '/chapter10', component: SotaTiago },
  { path: '/chapter11', component: SotaObsidian },
  { path: '/chapter12', component: SotaImplic },
  { path: '/:catchAll(.*)', redirect: '/chapter1' } // Redirect to Chapter 1 by default
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
