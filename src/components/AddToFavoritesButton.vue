<template>
  <button @click="onClickAdd($event)">
    <transition name="fade" mode="out-in">
      <span class="material-icons icon" :key="isFavorite">
       {{  isFavorite ? 'favorite' : 'favorite_border' }}
      </span>
    </transition>
  </button>
</template>

<script>
import { ADD_TO_FAVORITES_HANDLER } from '../consts/mutations';
import { isPropertyOfObjectInArray } from '../helpers';

export default {
  name: 'AddToFavoritesButton',
  props: {
    id: Number,
  },
  computed: {
    isFavorite() {
      return isPropertyOfObjectInArray(
        'id',
        this.id,
        this.$store.state.favoritesMovies
      );
    },
  },
  methods: {
    onClickAdd(e) {
      e.stopPropagation();
      this.$store.commit(ADD_TO_FAVORITES_HANDLER, this.id);
    },
  },
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
.icon {
  color: var(--orange);
  font-size: 50px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
