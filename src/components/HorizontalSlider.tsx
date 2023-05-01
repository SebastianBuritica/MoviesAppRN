import React from 'react';
import {FlatList, Text, View} from 'react-native';
import MoviePoster from './MoviePoster';
import {Movie} from '../interfaces/movieInterface';

type Props = {
  title?: string;
  moviesNowPlaying: Movie[];
};

const HorizontalSlider: React.FC<Props> = ({moviesNowPlaying, title}) => {
  return (
    <View style={{height: title ? 245 : 220}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>
      <FlatList
        data={moviesNowPlaying}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
