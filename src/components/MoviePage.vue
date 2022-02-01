<template>
  <section>
    <img
      :src="'https://image.tmdb.org/t/p/' + 'w500' + movie.poster_path"
      alt="poster"
    />
    <div class="description-container">
      <h4>{{ movie.title }}</h4>
      <p class="description">{{ movie.overview }}</p>
      <p class="genres">
        <span v-for="genre in genres">{{ genre }}</span>
      </p>
    </div>
  </section>
</template>

<script>
import { getGenres } from '../helpers';

export default {
  name: 'MoviePage',
  computed: {
    movie() {
      return this.$store.getters.getMovieById(this.$route.params.movieId);
    },
    genres() {
      return getGenres(this, this.movie);
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 100px;
  display: flex;
}
.description-container {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
}
h4 {
  margin-bottom: 40px;
}
img {
}

.description {
  text-align: left;
}
</style>
