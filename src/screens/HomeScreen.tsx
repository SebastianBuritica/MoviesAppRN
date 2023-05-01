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
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
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
            data={nowPlaying!}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        {/* Popular movies */}
        <HorizontalSlider movies={nowPlaying} title="Now Playing" />
        <HorizontalSlider movies={popular} title="Popular Movies" />
        <HorizontalSlider movies={topRated} title="Top Rated" />
        <HorizontalSlider movies={upcoming} title="Upcoming Movies" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
