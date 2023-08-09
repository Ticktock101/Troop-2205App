import { StatusBar } from 'expo-status-bar';
import React, {Component, useState, useRef} from 'react';
import { StyleSheet, Text, View, PanResponder} from 'react-native';
// import { PanGestureHandler, State, ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const [isRight, setIsRight] = useState(false);
  let isRightRef = useRef(isRight);

  const panResponderInstance = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const { dx } = gestureState;
        if (dx > 100) {
          isRightRef.current = true;
        } else if (dx < -100) {
          isRightRef.current = false;
        }
      },
      onPanResponderRelease: () => {
        // Gesture has been released, perform final actions.
        console.log(isRightRef);
      },
    })
  )



  return (
    <View style={styles.container}
    {...panResponderInstance.current.panHandlers}>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },

  innerContainer: {
    flex: 1,
  },

  text: {
    fontSize: 20,
  },
});
