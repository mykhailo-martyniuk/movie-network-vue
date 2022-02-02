<template>
  <div @click="onClickCard" class="card">
    <img
      :src="'https://image.tmdb.org/t/p/' + 'w500' + imgSrc"
      :alt="!imgSrc ? title : 'poster'"
    />
    <div class="overlay">
      <div class="button-wrap">
        <AddToFavoritesButton :id="id"></AddToFavoritesButton>
      </div>
    </div>
  </div>
</template>

<script>
import { ADD_TO_FAVORITES_HANDLER } from '../consts/mutations';
import AddToFavoritesButton from './AddToFavoritesButton.vue';

export default {
  name: 'MovieCard',
  components: { AddToFavoritesButton },
  props: {
    imgSrc: String,
    title: String,
    id: Number,
  },
  data() {
    return {};
  },

  methods: {
    onClickAdd(e) {
      e.stopPropagation();
      this.$store.commit(ADD_TO_FAVORITES_HANDLER, this.id);
    },
    onClickCard(e) {
      this.$router.push({ name: 'Movie', params: { movieId: this.id } });
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;

  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
}

.card:hover .overlay {
  opacity: 1;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 0;
}
.button-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #14181d;
  border-radius: 5px;
  background-color: rgba(20, 24, 29, 0.8);
}
img {
  display: block;
  width: 150px;
  z-index: 2;
}

</style>
