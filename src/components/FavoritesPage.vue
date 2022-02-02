<template>
  <h2>Favorites</h2>
  <div class="movie-container">
    <MovieCard
      v-for="movie in favorites"
      class="card"
      :imgSrc="movie.poster_path"
      :title="movie.title"
      :id="movie.id"
    >
    </MovieCard>
  </div>
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

<style scoped>
h2 {
  margin-top: 100px;
  margin-bottom: 80px;
  font-size: 32px;
}
</style>
