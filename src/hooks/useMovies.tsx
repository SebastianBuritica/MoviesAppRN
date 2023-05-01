/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = React.useState<Boolean>(false);
  const [moviesState, setMoviesState] = React.useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const nowplayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
      const popularPromise = movieDB.get<MovieDBResponse>('/popular');
      const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
      const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

      const response = await Promise.all([
        nowplayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

      setMoviesState({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upcoming: response[3].data.results,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);

  return {...moviesState, isLoading};
};
