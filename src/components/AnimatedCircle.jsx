import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const cirlceContainerSize = 50;

function AnimatedCircle({circleX}) {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - cirlceContainerSize / 2}],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -cirlceContainerSize / 1.1,
    width: cirlceContainerSize,
    borderRadius: cirlceContainerSize,
    height: cirlceContainerSize,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedCircle;
