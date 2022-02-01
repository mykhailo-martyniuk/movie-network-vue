import MoviePage from '../components/MoviePage.vue';
import MoviesListPage from '../components/MoviesListPage.vue';
//import VueRouter from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import FavoritesPage from '../components/FavoritesPage.vue';

export const router = createRouter({
  history: createWebHashHistory(),
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
