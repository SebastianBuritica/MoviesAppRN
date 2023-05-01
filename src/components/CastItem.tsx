import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

type Props = {
  actor: Cast;
};

const CastItem: React.FC<Props> = ({actor}) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri: imgUrl}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontWeight: 'bold'}}>{actor.name}</Text>
        <Text>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 7,

    elevation: 9,
    marginRight: 10,
    paddingRight: 20,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 5,
  },
});
