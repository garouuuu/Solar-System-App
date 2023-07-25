import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import image from '../assets/181115180453-01-mars-best-moments-mars-globe-valles-marineris-enhanced-super-tease.jpg';

const Images = () => {
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    paddingHorizontal: 5,
  },
  image: {
    height: 200,
    width: 300,
  },
});

export default Images;