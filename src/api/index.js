import axios from 'axios';
import { API_KEY } from '../consts';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const fetchPopular = async (page) => {
  const response = await api.get(
    `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return {
    movies: response.data.results,
    totalPages:
      response.data.total_pages > 500 ? 500 : response.data.total_pages,
  };
};

export const searchByTitle = async (searchQuery, page) => {
  const response = await api.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${searchQuery}`
  );


  return {
    movies: response.data.results,
    totalPages: response.data.total_pages,
  };
};

export const fetchGenres = async () => {
  const response = await api.get(
    `genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  return response.data.genres;
};

export const fetchMovieById = async (id) => {
  const response = await api.get(
    `find/${id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
  );
  return response.data;
};
