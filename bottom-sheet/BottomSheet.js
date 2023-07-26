import { View, Text, Dimensions, Animated, StyleSheet, Pressable , Linking} from 'react-native';
import React, { useEffect, useRef, useState , useCallback} from 'react';
import { IconButton, Portal } from 'react-native-paper';
import { PanGestureHandler } from 'react-native-gesture-handler';

const BottomSheet = ({ show, onDismiss, enableBackdropDismiss, children }) => {
  const bottomSheetHeight = Dimensions.get('window').height * 0.8;
  const deviceWidth = Dimensions.get('window').width;
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;
  const backdropOpacity = useRef(new Animated.Value(1)).current;

  


  /*AGGIGMA SHEET*/
  const onGesture = (event) => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  };

  const onGestureEnd = (event) => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 2) {
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        onDismiss();
        bottom.setValue(-bottomSheetHeight);
        backdropOpacity.setValue(1);
      });
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]); 

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Pressable onPress={enableBackdropDismiss ? onDismiss : undefined} style={styles.backDrop}>
        <Animated.View style={[styles.backDropOverlay, { opacity: backdropOpacity }]} />
      </Pressable>

      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeight,
            bottom: bottom,
            shadowOffset: {
              height: -3,
            },
          },
          styles.common,
        ]}
      >
        
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
        
          <View
            style={[
              styles.header,
              styles.common,
              {
                shadowOffset: {
                  height: -3,
                },
              },
            ]}
          >
            
            <View
              style={{
                width: 60,
                height: 3,
                position: 'absolute',
                top: 8,
                left: (deviceWidth - 60) / 2,
                zIndex: 10,
                backgroundColor: '#ccc',
              }}
            />
            
            {/* If you want to show the close icon */}
            {/* <IconButton color="red" icon="close" style={styles.closeIcon} onPress={onDismiss} /> */}
          </View>
          
        </PanGestureHandler>
        {children}
      </Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#e1e2e6',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },

  header: {
    height: 44,
    backgroundColor: '#038cfc',
  },

  common: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },

  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
  },

  backDropOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.712)',
  },
});

export default BottomSheet;
