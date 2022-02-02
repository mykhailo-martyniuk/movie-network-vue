<template>
  <p>
    <a v-for="genre in genres">{{ genre }}</a>
  </p>
</template>

<script>
import { getGenres } from '../helpers';

export default {
  name: 'GenreList',
  props: {
    movieId: Number,
  },
  computed: {
    movie() {
      return this.$store.getters.getMovieById(this.movieId);
    },
    genres() {
      return getGenres(this.$store.state.genres, this.movie);
    },
  },
};
</script>

<style scoped>
a {
  margin-top: 50px;
  display: block;
  background: var(--background-second);
  border-radius: 3px;
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.05);
  color: #9ab;
  line-height: 1.5;
  padding: 3px 6px;
  cursor: pointer;
}

a+a {

  margin-left: 5px;
}

p{
  display: flex;
}
</style>
