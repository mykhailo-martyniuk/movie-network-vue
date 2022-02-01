<template>
  <section>
    <h3>Favorites</h3>
    <div class="movie-container">
      <router-link
        class="link"
        v-for="movie in favorites"
        :to="{ name: 'Movie', params: { movieId: movie.id } }"
      >
        <MovieCard
          :imgSrc="movie.poster_path"
          :title="movie.title"
          :id="movie.id"
        >
        </MovieCard>
      </router-link>
    </div>
    <h3 class="popular-title">Popular</h3>
    <div class="movie-container">
      <router-link
        class="link"
        v-for="movie in movies"
        :to="{ name: 'Movie', params: { movieId: movie.id } }"
      >
        <MovieCard
          :imgSrc="movie.poster_path"
          :title="movie.title"
          :id="movie.id"
        >
        </MovieCard>
      </router-link>
    </div>

    <Pagination class="pagination"></Pagination>
  </section>
</template>

<script>
import MovieCard from './MovieCard.vue';
import Pagination from './Pagination.vue';
export default {
  name: 'MoviesPage',
  components: { Pagination, MovieCard },
  data() {
    return {};
  },

  computed: {
    movies() {
      console.log('Appp', this.$store.state.movies);
      return this.$store.state.movies;
    },
    favorites() {
      return this.$store.state.favoritesMovies;
    },
  },

  methods: {},
};
</script>

<style scoped>

h3{
  font-size: 28px;
  margin-bottom: 30px;
}
section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.movie-container {
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -20px -20px;
}

.link {
  margin: 20px 20px;
}

.popular-title {
  margin-top: 100px;
}
.pagination {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
