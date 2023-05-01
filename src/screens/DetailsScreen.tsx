/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {Movie} from '../interfaces/movieInterface';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/types';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}
const screenHeight = Dimensions.get('screen').height;

const DetailsScreen: React.FC<Props> = ({route, navigation}) => {
  const movie = route.params;
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {cast, isLoading, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri: imgUrl}} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subtitle}>{movie.overview}</Text>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>

      {/* Go back btn */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Icon color="white" name="arrow-undo-circle-outline" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  imageContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 7,

    elevation: 9,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  backBtn: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 10,
  },
});
