<script>
import MoviePage from './components/MoviePage.vue';
import MovieCard from './components/MovieCard.vue';
import MoviesListPage from './components/MoviesListPage.vue';
import Pagination from './components/Pagination.vue';
import Header from './components/Header.vue';
import FavoritesPage from './components/FavoritesPage.vue';
import { SET_FAVORITES_FROM_LS, SET_GENRES } from './consts/mutations';
import {SET_GENRES_ACTION, SET_MOVIES_ACTION} from './consts/actions';
import GenreList from './components/GenreList.vue';
import AddToFavoritesButton from './components/AddToFavoritesButton.vue';

export default {
  components: {
    MoviePage,
    MovieCard,
    MoviesListPage,
    Pagination,
    Header,
    FavoritesPage,
    GenreList,
    AddToFavoritesButton
  },

  mounted() {
    this.$store.dispatch(SET_MOVIES_ACTION);
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
