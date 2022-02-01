<template>
  <div class="card">
    <img :src="'https://image.tmdb.org/t/p/' + 'w500' + imgSrc" alt="" />
    <!--    <p>{{ title }}</p>-->
    <div class="overlay">
      <div class="button-wrap">
        <button v-on:click="onClickAdd($event)">
          <span class="material-icons icon">{{
            isFavorite ? 'favorite' : 'favorite_border'
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { isPropertyOfObjectInArray } from '../helpers';
import { ADD_TO_FAVORITES_HANDLER } from '../store/mutations';

export default {
  name: 'MovieCard',
  props: {
    imgSrc: String,
    title: String,
    id: Number,
  },
  data() {
    return {};
  },
  computed: {
    isFavorite() {
      if (
        !isPropertyOfObjectInArray(
          'id',
          this.id,
          this.$store.state.favoritesMovies
        )
      )
        return false;
      return true;
    },
  },
  methods: {
    onClickAdd(e) {
      e.preventDefault();
      this.$store.commit(ADD_TO_FAVORITES_HANDLER, this.id);
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;

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
button {
  background: none;
  border: none;
  cursor: pointer;
}
.icon {
  color: var(--orange);
  font-size: 50px;
}
</style>
