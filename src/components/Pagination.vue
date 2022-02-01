<template>
  <div class="pagination-container">
    <button :onclick="() => onClickIncrement(-1)">
      <span class="material-icons icon">chevron_left</span>
    </button>
    <div class="numbers-container">
      <button
        class="pagination-el"
        v-bind:class="{
          'number-active': i === currentPage,
          number: Number.isInteger(i),
        }"
        v-for="i in pagination"
        :onclick="Number.isInteger(i) ? () => onClickNumber(i) : null"
      >
        {{ i }}
      </button>
    </div>

    <button :onclick="() => onClickIncrement(1)">
      <span class="material-icons icon">chevron_right</span>
    </button>
  </div>
</template>

<script>
import { conditionForIncrement, paginationArray } from '../helpers';
import { SET_PAGE_ACTION } from '../store/actions';

export default {
  name: 'Pagination',
  computed: {
    totalPages() {
      return this.$store.state.totalPages;
    },
    pagination() {
      return paginationArray(
        this.$store.state.currentPage,
        this.$store.state.totalPages
      );
    },
    currentPage() {
      return this.$store.state.currentPage;
    },
  },
  methods: {
    onClickNumber(page) {
      if (this.$store.state.currentPage !== page)
        this.$store.dispatch(SET_PAGE_ACTION, page);
    },
    onClickIncrement(value) {
      if (conditionForIncrement(this, value))
        this.$store.dispatch(
          SET_PAGE_ACTION,
          this.$store.state.currentPage + value
        );
    },
  },
};
</script>

<style scoped>

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  color: var(--primary-text);
}
button {
  border: none;
  background: none;
  display: flex;
  cursor: pointer;
}
.numbers-container {
  display: flex;
}
.pagination-el {
  color: inherit;
}
.pagination-el + .pagination-el {
  margin-left: 5px;
}
.number {
  cursor: pointer;
  color: inherit;
}

.number-active {
  color: var(--orange);
}
</style>