/* eslint-disable @typescript-eslint/no-unused-vars */
// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';

const HomeScreen = () => {
  const {moviesNowPlaying, isLoading, moviesPopular} = useMovies();
  const {top} = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width;

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 10}}>
        <View style={{height: 440}}>
          <Carousel
            data={moviesNowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        {/* Popular movies */}
        <HorizontalSlider
          moviesNowPlaying={moviesNowPlaying}
          title="Now Playing"
        />
        <HorizontalSlider
          moviesNowPlaying={moviesPopular}
          title="Popular Movies"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
