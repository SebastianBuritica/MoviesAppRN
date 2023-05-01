/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = React.useState<Movie[]>([]);
  const [moviesPopular, setMoviesPopular] = React.useState<Movie[]>([]);
  const [isLoading, setIsLoading] = React.useState<Boolean>(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const res = await movieDB.get<MovieDBResponse>('/now_playing');
      const movies = res.data.results;
      setMoviesNowPlaying(movies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPopularMovies = async () => {
    setIsLoading(true);
    try {
      const res = await movieDB.get<MovieDBResponse>('/popular');
      const movies = res.data.results;
      setMoviesPopular(movies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchMovies();
    fetchPopularMovies();
  }, []);

  return {moviesNowPlaying, isLoading, moviesPopular};
};
