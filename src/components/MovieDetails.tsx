import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {MovieFullDetails} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import CastItem from './CastItem';

type Props = {
  movieFull: MovieFullDetails;
  cast: Cast[];
};

const MovieDetails: React.FC<Props> = ({movieFull, cast}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const formattedBudget = formatter.format(movieFull.budget);

  return (
    <>
      {/* Details */}
      <View style={{marginLeft: 18, marginTop: 8}}>
        <Text>⭐️Vote Average {movieFull.vote_average}</Text>
        <Text>✔️{movieFull.genres.map(g => g.name).join(', ')}</Text>

        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text>{formattedBudget}</Text>
        {/* Casting */}
        <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
          Actor
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          style={{marginTop: 10}}
        />
      </View>
    </>
  );
};

export default MovieDetails;
