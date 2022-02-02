<template>
  <section>
    <img
      :src="'https://image.tmdb.org/t/p/' + 'w500' + movie.poster_path"
      alt="poster"
    />
    <div class="description-container">
      <div class="title-container">
        <h4>{{ movie.title }}</h4>
        <p class="year">{{ releaseDate }}</p>
      </div>
      <p class="description">{{ movie.overview }}</p>
      <GenreList class="genres" :movieId="movie.id"></GenreList>
      <AddToFavoritesButton class="like" :id="movie.id"></AddToFavoritesButton>
    </div>
  </section>
</template>

<script>
import GenreList from './GenreList.vue';
import AddToFavoritesButton from './AddToFavoritesButton.vue';

export default {
  name: 'MoviePage',
  components: {
    GenreList,
    AddToFavoritesButton,
  },

  computed: {
    movie() {
      return this.$store.getters.getMovieById(this.$route.params.movieId);
    },
    releaseDate() {
      return Number.parseInt(this.movie.release_date);
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
  font-size: 36px;
  margin-right: 20px;
}
.title-container {
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
}
.year {
  text-decoration: underline;
}
img {
  height: 600px;
  display: block;
  border-radius: 4px;
}

.description {
  text-align: left;
}

.genres {
  margin-bottom: 50px;
}

.like{
  text-align: left;
}
</style>
