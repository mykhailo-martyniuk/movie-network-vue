<template>
  <section>
    <template v-if="!isSearch">
      <h3>Favorites</h3>
      <div class="movie-container">
        <transition-group name="list">
          <MovieCard
            v-for="movie in favorites"
            class="card"
            :imgSrc="movie.poster_path"
            :title="movie.title"
            :id="movie.id"
          >
          </MovieCard>
        </transition-group>
      </div>
    </template>
    <h3 class="popular-title">{{ isSearch ? 'Found' : 'Popular' }}</h3>
    <template v-if="!isSearch">
      <div class="movie-container">
          <MovieCard
            v-for="movie in movies"
            class="card"
            :imgSrc="movie.poster_path"
            :title="movie.title"
            :id="movie.id"
          >
          </MovieCard>
      </div>
    </template>
    <template v-else>
      <div class="movie-found-container">
        <MovieFoundCard
          v-for="movie in movies"
          class="card"
          :imgSrc="movie.poster_path"
          :title="movie.title"
          :id="movie.id"
          :desc="movie.overview"
          :date="movie.release_date"
        >
        </MovieFoundCard>
      </div>
    </template>

    <Pagination class="pagination"></Pagination>
  </section>
</template>

<script>
import MovieCard from './MovieCard.vue';
import Pagination from './Pagination.vue';
import MovieFoundCard from './MovieFoundCard.vue';

export default {
  name: 'MoviesPage',
  components: { Pagination, MovieCard, MovieFoundCard },
  data() {
    return {};
  },

  computed: {
    movies() {
      return this.$store.state.movies;
    },
    favorites() {
      return this.$store.state.favoritesMovies;
    },
    isSearch() {
      return this.$store.state.isSearch;
    },
  },

  methods: {},
};
</script>

<style scoped>
h3 {
  font-size: 28px;
  margin-bottom: 30px;
}
section {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popular-title {
  margin-top: 100px;
}
.pagination {
  margin-top: 50px;
  margin-bottom: 50px;
}
.movie-found-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.list-enter {
  opacity: 0;
  transform: translateY(30px);
}
.list-move  {
  transition: transform 1s;
}
</style>
