import React, { useCallback, useEffect, useRef, useState, Component } from 'react';
import { Animated, PanResponder, Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, ImageBackground, Linking , Easing, RefreshControl,} from 'react-native';
import earth from '../assets/planet-earth.png';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import space from '../assets/Hubble_ultra_deep_field.jpg';
import venus from '../assets/venus.png';
import mercury from '../assets/mercury.png';
import mars from '../assets/mars.png';
import jupiter from '../assets/jupiter.png';
import saturn from '../assets/saturn.png';
import uranus from '../assets/uranus.png';
import neptune from '../assets/neptune.png';
import comet from '../assets/comet.png';
import BottomSheet from '../bottom-sheet/BottomSheet';
import { ScrollView } from 'react-native-gesture-handler';
import Images from '../components/Images'
import Circle from '../components/Circle';









//////


const First = ({navigation}) => {
  const earthPan = useRef(new Animated.ValueXY()).current;
  const venusPan = useRef(new Animated.ValueXY()).current;
  const moonPan = useRef(new Animated.ValueXY()).current;
  const mercuryPan = useRef(new Animated.ValueXY()).current;
  const marsPan = useRef(new Animated.ValueXY()).current;
  const jupiterPan = useRef(new Animated.ValueXY()).current;
  const saturnPan = useRef(new Animated.ValueXY()).current;
  const uranusPan = useRef(new Animated.ValueXY()).current;
  const neptunePan = useRef(new Animated.ValueXY()).current;

  const cometX = useRef(new Animated.Value(0)).current;
  const cometY = useRef(new Animated.Value(0)).current;


  



/*LINKSSS*/
const supportedURL = 'https://en.wikipedia.org/wiki/Mars';
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    
    <TouchableOpacity onPress={handlePress} style={styles.urlButton}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
    
     
  );
};





/* ANTIDRASEIS PLANITWNN*/

  const earthPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      earthPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(earthPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  const venusPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      venusPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(venusPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  const moonPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      moonPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(moonPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  const mercuryPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      mercuryPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(mercuryPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  const marsPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      marsPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(marsPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  const jupiterPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      jupiterPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(jupiterPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  const saturnPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      saturnPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(saturnPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  const uranusPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      uranusPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(uranusPan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });

  const neptunePanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      neptunePan.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(neptunePan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
    },
  });


//STARRRR////
const tailOpacity = useRef(new Animated.Value(0)).current;

useEffect(() => {
  const cometAnimation = Animated.loop(
    Animated.sequence([
      Animated.timing(cometX, {
        toValue: 100, // Adjust this value to change the horizontal movement
        duration: 8000,
        useNativeDriver: true,
      }),
      Animated.spring(cometY, {
        toValue: 100,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.timing(cometX, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: true,
      }),
      Animated.spring(cometY, {
        toValue: 0,
        
        useNativeDriver: true,
      }),
    ])
  );
  
  const tailAnimation = Animated.loop(
    Animated.sequence([
      Animated.timing(tailOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(tailOpacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ])
  );

  cometAnimation.start();
  tailAnimation.start();

  return () => {
    cometAnimation.stop();
    tailAnimation.stop();
  };
}, [cometX, tailOpacity]);



const [show, setShow ] = useState(false);




  return (
    <ImageBackground source={space} style={styles.container}>
      <SafeAreaView >

      
        <Text style={[styles.header, styles.paragraph]}>The solarious systemious</Text>
        
        
        <Button onPress={() => setShow(true)} title="Learn More" />

        
       
        <Circle
      circleSize={200} // Adjust the diameter of the circle as per your preference
      //SeparatorSize={40} // Adjust the size of the center planet as per your preference
      
    />



<BottomSheet
  show={show}
  onDismiss={() => {
    setShow(false);
  }}
  enableBackdropDismiss
>
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    <Image source={mars} style={styles.Openbox} />
    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Mars</Text>
    <View
      style={{
        backgroundColor: '#038cfc',
        borderRadius: 50,
        alignItems: 'center',
        overflow: 'hidden',
        padding: 10,
      }}
    >
      <Text style={{ color: 'white', fontSize: 15 }}>
        Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is
        due to finely grained iron(III) oxide dust in the soil, giving it the nickname "the Red Planet".[20][21] There
        is a sharp contrast between the two Martian hemispheres: the northern hemisphere is on average flatter and
        smoother than the southern hemisphere. The planet's two poles are covered by water and carbon dioxide ice caps.
        Surrounding the Martian surface is a dynamic thin atmosphere (1% of Earth's surface pressure), made primarily
        of carbon dioxide. Mars has two irregularly shaped natural satellites, Phobos and Deimos.
      </Text>
    </View>
    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Real images of the planet</Text>

    <View style={{ paddingVertical: 5 }}>
      <Images />
    </View>
    <View style={{ paddingVertical: 5 }}>
      <Images />
    </View>

    <View style={{ marginTop: 10 }}>
      <OpenURLButton url={supportedURL}>Don't believe me?</OpenURLButton>
    </View>
  </ScrollView>
</BottomSheet>
        <Animated.Image
  source={comet}
  style={[
    styles.star,
    { opacity: tailOpacity, transform: [{ translateX: cometX }, { translateY: cometY }] },
  ]}
   />
        

      
        <Animated.Image
        
        {...mercuryPanResponder.panHandlers}
        source={mercury}
        style={[
          styles.box,
          {
            transform: [{ translateX: mercuryPan.x }, { translateY: mercuryPan.y }],
          },
        ]}
      />
      <Animated.Image
          {...venusPanResponder.panHandlers}
          source={venus}
          style={[
            styles.box,
            {
              transform: [{ translateX: venusPan.x }, { translateY: venusPan.y }],
            },
          ]}
        />

      <Animated.Image
      
        {...moonPanResponder.panHandlers}
        source={moon}
        style={[
          styles.box,
          {
            transform: [{ translateX: moonPan.x }, { translateY: moonPan.y }],
          },
        ]}
      />
        <Animated.Image
          {...earthPanResponder.panHandlers}
          source={earth}
          style={[
            styles.box,
            {
              transform: [{ translateX: earthPan.x }, { translateY: earthPan.y }],
            },
          ]}
        />
        
      
      
      <Animated.Image
        {...marsPanResponder.panHandlers}
        source={mars}
        style={[
          styles.box,
          {
            transform: [{ translateX: marsPan.x }, { translateY: marsPan.y }],
          },
        ]}
      />

     <Animated.Image
        {...jupiterPanResponder.panHandlers}
        source={jupiter}
        style={[
          styles.box,
          {
            transform: [{ translateX: jupiterPan.x }, { translateY: jupiterPan.y }],
          },
        ]}
      />
       <Animated.Image
        {...saturnPanResponder.panHandlers}
        source={saturn}
        style={[
          styles.box,
          {
            transform: [{ translateX: saturnPan.x }, { translateY: saturnPan.y }],
          },
        ]}
      />

     <Animated.Image
        {...uranusPanResponder.panHandlers}
        source={uranus}
        style={[
          styles.box,
          {
            transform: [{ translateX: uranusPan.x }, { translateY: uranusPan.y }],
          },
        ]}
      />
       <Animated.Image
        {...neptunePanResponder.panHandlers}
        source={neptune}
        style={[
          styles.box,
          {
            transform: [{ translateX: neptunePan.x }, { translateY: neptunePan.y }],
          },
        ]}
      />
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    color: 'white',
    margin: 24,
    textAlign: 'center',
  },
  separatorContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  separator: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: '#737373',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  box: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
   Openbox: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },

  star: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    top: '50%',
    marginLeft: -20,
    marginTop: -20,
  },
  starImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  
  urlButton: {
    backgroundColor: '#038cfc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
});

export default First;
