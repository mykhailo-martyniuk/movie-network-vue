import {
  ADD_TO_FAVORITES_HANDLER,
  ADD_TO_MOVIES,
  SET_FAVORITES_FROM_LS,
  SET_GENRES,
  SET_IS_SEARCH,
  SET_MOVIES,
  SET_PAGE,
  SET_SEARCH_QUERY,
  SET_TOTAL_PAGES,
} from '../consts/mutations';
import {
  fetchGenres,
  fetchMovieById,
  fetchPopular,
  searchByTitle,
} from '../api';
import {
  ADD_TO_MOVIE_ACTION,
  SET_GENRES_ACTION,
  SET_MOVIES_ACTION,
  SET_PAGE_ACTION,
  SET_SEARCH_MOVIES_ACTION,
} from '../consts/actions';
import Vuex from 'vuex';
import { findElByProperty, isPropertyOfObjectInArray, LS } from '../helpers';
import { FAVORITES } from '../consts';

export const store = new Vuex.Store({
  state: {
    movies: [],
    favoritesMovies: [],
    currentPage: 1,
    totalPages: null,
    isSearch: false,
    searchQuery: '',
    genres: [],
  },
  getters: {
    getMovieById: (state) => (id) => {
      let res = findElByProperty('id', Number.parseInt(id), state.movies);
      if (!res)
        res = findElByProperty(
          'id',
          Number.parseInt(id),
          state.favoritesMovies
        );
      return res;
    },
    getFavorites: (state) => {
      return [...state.favoritesMovies];
    },
  },
  mutations: {
    [SET_MOVIES](state, movies) {
      state.movies = movies;
    },
    [ADD_TO_MOVIES](state, movie) {
      state.movies = [...state.movies, movie];
    },
    [SET_PAGE](state, page) {
      state.currentPage = page;
    },
    [SET_TOTAL_PAGES](state, amount) {
      state.totalPages = amount;
    },
    [SET_IS_SEARCH](state, isSearch) {
      state.isSearch = isSearch;
    },
    [SET_GENRES](state, genres) {
      state.genres = genres;
    },
    [SET_SEARCH_QUERY](state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    [ADD_TO_FAVORITES_HANDLER](state, id) {
      if (isPropertyOfObjectInArray('id', id, state.favoritesMovies)) {
        state.favoritesMovies = state.favoritesMovies.filter(
          (el) => el.id !== id
        );
      } else {
        state.favoritesMovies = [
          ...state.favoritesMovies,
          findElByProperty('id', id, state.movies),
        ];
      }

      LS(FAVORITES, state.favoritesMovies);
    },
    [SET_FAVORITES_FROM_LS](state) {
      state.favoritesMovies = LS(FAVORITES);
    },
  },
  actions: {
    async [SET_MOVIES_ACTION]({ commit, state }) {
      commit(SET_IS_SEARCH, false);
      const data = await fetchPopular(state.currentPage);
      commit(SET_MOVIES, data.movies);
      commit(SET_TOTAL_PAGES, data.totalPages);
    },
    async [SET_GENRES_ACTION]({ commit, state }) {
      const data = await fetchGenres();
      commit(SET_GENRES, data);
    },
    async [SET_SEARCH_MOVIES_ACTION](
      { commit, state },
      { page = 1, searchQuery = state.searchQuery }
    ) {
      commit(SET_IS_SEARCH, true);
      commit(SET_PAGE, page);
      if (searchQuery !== state.searchQuery)
        commit(SET_SEARCH_QUERY, searchQuery);

      const data = await searchByTitle(searchQuery, page);
      commit(SET_MOVIES, data.movies);
      commit(SET_TOTAL_PAGES, data.totalPages);
    },
    async [SET_PAGE_ACTION]({ dispatch, commit, state }, page) {
      if (state.isSearch) {
        await dispatch(SET_SEARCH_MOVIES_ACTION, { page });
      } else {
        commit(SET_PAGE, page);
        await dispatch(SET_MOVIES_ACTION);
      }
    },
    async [ADD_TO_MOVIE_ACTION]({ dispatch, commit, state }, id) {
      const data = await fetchMovieById(id);
      commit(ADD_TO_MOVIES, data);
    },
  },
});
