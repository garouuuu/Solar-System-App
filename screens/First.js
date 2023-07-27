import React,{ useRef, useEffect}  from 'react';
import {  SafeAreaView,  View, Animated, StyleSheet, Easing, Image, TouchableOpacity, Vibration, ImageBackground,} from 'react-native';
import space from '../assets/03.ClusteredGalaxies-434410f.jpg'
import earth from "../assets/planet-earth.png";
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
import mercury from '../assets/mercury.png';
import venus from '../assets/venus.png';
import comet from '../assets/comet.png';
import jupiter from '../assets/jupiter.png';
import saturn from '../assets/saturn.png';
import uranus from '../assets/uranus.png';
import neptune from '../assets/neptune.png';
import mars from '../assets/mars.png';


const First = () => {

  const animatedvenus = useRef(new Animated.Value(0)).current;
  const animatedmercury = useRef(new Animated.Value(0)).current;
  const animatedearth = useRef(new Animated.Value(0)).current;
  const animatedcomet = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.timing(animatedvenus, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();

    Animated.loop(
      Animated.timing(animatedmercury, {
        toValue: 1,
        duration: 7000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();

    Animated.loop(
      Animated.timing(animatedearth, {
        toValue: 1,
        duration: 9000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();

    Animated.loop(
      Animated.timing(animatedcomet, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  };

  const venusRotation = animatedvenus.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const mercuryRotation = animatedmercury.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const earthRotation = animatedearth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const cometRotation = animatedcomet.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  

  const mercuryTransform = [
    { translateX: 6 },
    { rotate: mercuryRotation },
    { translateX: -6 },
    { translateY: -70 },
  ];

  const venusTransform = [
    { translateX: 10 },
    { rotate: venusRotation },
    { translateX: -10 },
    { translateY: -100 },
  ];

  const earthTransform = [
    { translateX: 6 },
    { rotate: earthRotation },
    { translateX: -6 },
    { translateY: -150 },
  ];

  const cometTransform = [
    { translateX: 20 },
    { rotate: cometRotation },
    { translateX: -10 },
    { translateY: -230 },//how close or far
  ];


  return (
    <ImageBackground source={space} style={styles.container}>
      <SafeAreaView >

       
      <View style={styles.container}>
      <TouchableOpacity onPress={() => Vibration.vibrate()}>
        <Image source={sun} style={styles.sunImage} />
      </TouchableOpacity>

      <Animated.View style={[styles.item, { transform: venusTransform }]}>
        <Image source={venus} style={styles.venus} />
      </Animated.View>

      <Animated.View style={[styles.item, { transform: mercuryTransform }]}>
        <Image source={mercury} style={styles.mercury} />
      </Animated.View>

      <Animated.View style={[styles.item, { transform: earthTransform }]}>
        <Image  source={earth} style={ styles.earth  } />
      </Animated.View>

      <Animated.View style={[styles.item, { transform: cometTransform }]}>
        <Image source={comet} style={styles.comet} />
      </Animated.View>
      
    </View>
      </SafeAreaView> 
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    position: 'absolute',
  },
  venus: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  mercury: {
    padding: 5,
    width: 20,
    height: 20,
    borderRadius: 10, 
  },
  sunImage: {
    width: 80,
    height: 80,
    borderRadius: 40, 
  },
  earth: {
    width: 35,
    height: 35,
    borderRadius: 25, 
  },
  comet: {
    position: 'absolute',
    width: 8,
    height: 8,
    
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    top: '50%',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20, 
  },
});

export default First;
