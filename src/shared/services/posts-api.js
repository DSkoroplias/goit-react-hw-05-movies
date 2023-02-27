import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e59553b70fe2fa353c5474cefb89bc6e',
  },
});

export const TradingTodaySearch = async () => {
  const { data } = await instance.get('/trending/movie/day');

  return data;
};

export const SearchMovie = async search => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: search,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getCreditsByMovieId = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getReviewsByMovieId = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
