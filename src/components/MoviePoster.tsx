/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/types';

type Props = {
  movie: Movie;
  height?: number;
  width?: number;
};

const MoviePoster: React.FC<Props> = ({movie, height = 420, width = 300}) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation =
    useNavigation<StackNavigationProp<RootStackParams, 'Details'>>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,
      }}
      onPress={() => navigation.navigate('Details', movie)}>
      <View style={styles.imageElevation}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageElevation: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
