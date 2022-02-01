<script>
import MoviePage from './components/MoviePage.vue';
import MovieCard from './components/MovieCard.vue';
import MoviesListPage from './components/MoviesListPage.vue';
import Pagination from './components/Pagination.vue';
import Header from './components/Header.vue';
import { getPopularMovies } from './helpers';
import FavoritesPage from './components/FavoritesPage.vue';
import { SET_FAVORITES_FROM_LS, SET_GENRES } from './store/mutations';
import { SET_GENRES_ACTION } from './store/actions';

export default {
  components: {
    MoviePage,
    MovieCard,
    MoviesListPage,
    Pagination,
    Header,
    FavoritesPage,
  },

  mounted() {
    getPopularMovies(this);
    this.$store.commit(SET_FAVORITES_FROM_LS);
    this.$store.dispatch(SET_GENRES_ACTION);
  },
};
</script>

<template>
  <Header></Header>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
@import './assets/css/global.css';
</style>

<style scoped></style>
