import MoviePage from '../components/MoviePage.vue';
import MoviesListPage from '../components/MoviesListPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import FavoritesPage from '../components/FavoritesPage.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/movie/favorites',
      name: 'Favorites',
      component: FavoritesPage,
    },
    {
      path: '/movie/:movieId',
      name: 'Movie',
      component: MoviePage,
    },
    {
      path: '/',
      name: 'Main',
      component: MoviesListPage,
    },
  ],
});

export default router;
