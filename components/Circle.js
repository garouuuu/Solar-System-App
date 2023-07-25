import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing, Image, TouchableOpacity, Vibration, PanResponder } from 'react-native';
import earth from "../assets/planet-earth.png";
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
import mercury from '../assets/mercury.png';
import venus from '../assets/venus.png';

const Circle = () => {
  const animatedvenus = useRef(new Animated.Value(0)).current;
  const animatedmercury = useRef(new Animated.Value(0)).current;
  const animatedearth = useRef(new Animated.Value(0)).current;
  const earthPan = useRef(new Animated.ValueXY()).current;
//  const earthRotationEnabled = useRef(true).current;
  
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
    { translateY: -130 },
  ];

  const earthPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      earthPan.setValue({ x: gestureState.dx, y: gestureState.dy });
      
    },
    onPanResponderRelease: () => {
      Animated.spring(earthPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  return (
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
        <Animated.Image
          {...earthPanResponder.panHandlers}
          source={earth}
          style={[
            styles.earth,
            {
              transform: [{ translateX: earthPan.x }, { translateY: earthPan.y }],
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    position: 'absolute',
  },
  venus: {
    width: 40,
    height: 40,
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
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Circle;







/* ----------   LINES ANIMATIONS ( FOR MOVEMENT ) -------------- */
/*
import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';

class LineAnimation extends Component {
  constructor(props) {
    super(props);
    this.line1Value = new Animated.Value(0);
    this.line2Value = new Animated.Value(0);
    this.line3Value = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateLine1();
    this.animateLine2();
    this.animateLine3();
  }

  animateLine1() {
    Animated.sequence([
      Animated.timing(this.line1Value, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(this.line1Value, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => this.animateLine1());
  }

  animateLine2() {
    Animated.sequence([
      Animated.timing(this.line2Value, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(this.line2Value, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => this.animateLine2());
  }

  animateLine3() {
    Animated.sequence([
      Animated.timing(this.line3Value, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(this.line3Value, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => this.animateLine3());
  }

  render() {
    const line1TranslateY = this.line1Value.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 900], // Adjust the range based on your screen height
    });

    const line2TranslateY = this.line2Value.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 900], // Adjust the range based on your screen height
    });

    const line3TranslateY = this.line3Value.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 900], // Adjust the range based on your screen height
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          
        </TouchableOpacity>
        <Animated.View style={[styles.line1, { transform: [{ translateY: line1TranslateY }] }]} />
        <Animated.View style={[styles.line2, { transform: [{ translateY: line2TranslateY }] }]} />
        <Animated.View style={[styles.line3, { transform: [{ translateY: line3TranslateY }] }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line1: {
    position: 'absolute',
    top: 10,
    width: 2,
    height: '5%',
    backgroundColor: 'white',
  },
  line2: {
    position: 'absolute',
    top: 10,
    left: 110,
    width: 2,
    height: '5%',
    backgroundColor: 'white',
  },
  line3: {
    position: 'absolute',
    top: 10,
    right: 110,
    width: 2,
    height: '5%',
    backgroundColor: 'white',
  },
});

export default LineAnimation;
*/