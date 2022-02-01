<template>
  <header>
    <div class="container header-container">
      <h1>Movie Network</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/movie/favorites">Favorites</router-link>
          </li>
        </ul>
      </nav>
      <label>
        <span class="label-text">Search</span>
        <span class="input-wrap">
          <input type="text" v-model.trim="search" />
          <span class="material-icons icon">search</span>
        </span>
      </label>
    </div>
  </header>
</template>

<script>
import { SET_SEARCH_MOVIES_ACTION } from '../store/actions';
import { getPopularMovies, removeSpaces } from '../helpers';

export default {
  name: 'Header',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    onChangeSearch() {
      this.$store.dispatch(SET_SEARCH_MOVIES_ACTION, {
        searchQuery: this.search,
      });
    },
    setPopular() {
      getPopularMovies(this);
    },
  },
  watch: {
    search(newSearch, oldSearch) {
      const newSearchClear = removeSpaces(newSearch);
      const newOldSearch = removeSpaces(oldSearch);

      if (newSearchClear.length > 0 && newSearchClear !== newOldSearch) {
        console.log('search', this.search);
        this.onChangeSearch();
      } else if (newSearchClear.length === 0) {
        this.setPopular();
      }
    },
  },
};
</script>

<style scoped>
@import '../assets/css/global.css';
header {
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  background: var(--background);
  z-index: 5;
}
ul {
  margin-left: 80px;
  list-style: none;
  display: flex;
}

li + li {
  margin-left: 30px;
}

div {
  display: flex;
  align-items: center;
  height: 100%;
}
a,
a:visited {
  text-decoration: none;
  color: inherit;
}

label {
  margin-left: auto;
  display: flex;
  align-items: baseline;
}

.label-text {
  margin-right: 20px;
}

.input-wrap {
  position: relative;
  display: flex;
}
.icon {
  position: absolute;
  top: 6px;
  font-size: 18px;
  right: 5px;
}

input {
  padding: 8px 26px 8px 10px;
  width: 200px;
  height: 30px;

  border-radius: 15px;
  box-shadow: 0 1px 0 #414d5e;
  color: #89a;
  display: block;
  font-size: 1rem;
  line-height: 1.3;
  opacity: 0.3;
  border: none;
  transition: opacity var(--animation);
}

input:hover,
input:focus {
  opacity: 0.6;
}
</style>
