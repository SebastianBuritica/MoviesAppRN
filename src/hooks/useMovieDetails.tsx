import React from 'react';
import {MovieFullDetails} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

export interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull?: MovieFullDetails;
}

const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = React.useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  console.log(movieId);

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFullDetails>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsRes, castPromiseRes] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setMovieDetails({
      isLoading: false,
      movieFull: movieDetailsRes.data,
      cast: castPromiseRes.data.cast,
    });
  };

  React.useEffect(() => {
    getMovieDetails();
  }, []);

  return {...movieDetails};
};

export default useMovieDetails;
