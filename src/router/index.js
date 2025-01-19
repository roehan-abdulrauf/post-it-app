import { createRouter, createWebHistory } from 'vue-router';
import Notes from '../views/Notes.vue';
import NoteDetail from '../views/NoteDetail.vue';

const routes = [
  { path: '/', name: 'Notes', component: Notes },
  { path: '/note/:id', name: 'NoteDetail', component: NoteDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;