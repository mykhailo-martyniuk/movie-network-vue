<template>
  <h2>Favorites page</h2>
  <router-link
    v-for="movie in favorites"
    :to="{ name: 'Movie', params: { movieId: movie.id } }"
  >
    <MovieCard :imgSrc="movie.poster_path" :title="movie.title" :id="movie.id">
    </MovieCard>
  </router-link>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'FavoritesPage',

  components: { MovieCard },
  computed: {
    favorites() {
      return this.$store.state.favoritesMovies;
    },
  },
};
</script>

<style scoped></style>
