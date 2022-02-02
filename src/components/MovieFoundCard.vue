<template>
  <div class="card">
    <div class="img-container">
      <img :src="'https://image.tmdb.org/t/p/' + 'w500' + imgSrc" alt="" />
      <AddToFavoritesButton class="like" :id="id"></AddToFavoritesButton>
    </div>
    <div class="description-container">
      <div class="title-container">
        <h4>{{ title }}</h4>
        <p class="year">{{ releaseDate }}</p>
      </div>
      <p class="description">{{ desc }}</p>
      <GenreList class="genres" :movieId="id"></GenreList>
    </div>
  </div>
</template>

<script>
import GenreList from './GenreList.vue';
import AddToFavoritesButton from './AddToFavoritesButton.vue';

export default {
  name: 'MovieFoundCard',
  components: {
    GenreList,
    AddToFavoritesButton,
  },
  props: {
    imgSrc: String,
    title: String,
    id: Number,
    desc: String,
    date: String,
  },
  computed: {
    releaseDate() {
      return Number.parseInt(this.date);
    },
  },
};
</script>

<style scoped>
.card {
  padding: 10px 10px 20px 10px;
  max-width: 580px;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
}
img {
  width: 150px;
  display: block;
  margin-bottom: 40px;
  border-radius: 4px;
}
.img-container{
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
}

.description-container {
  flex-shrink: 1;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
}
h4 {
  font-size: 22px;
  margin-right: 20px;
}
.title-container {
  margin-bottom: 20px;
  display: flex;
  align-items: baseline;
}
.year {
  text-decoration: underline;
}

.description {
  text-align: left;
}
</style>
