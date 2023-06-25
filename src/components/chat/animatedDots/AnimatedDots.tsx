/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import React, { memo, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

import styles from './styles';

const AnimatedDots = memo(() => {
  const animation1 = useRef(new Animated.Value(0)).current;
  const animation2 = useRef(new Animated.Value(0)).current;
  const animation3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      const sequenceAnimation = Animated.sequence([
        Animated.timing(animation1, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation1, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation2, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation2, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation3, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation3, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]);

      Animated.loop(sequenceAnimation, { iterations: -1 }).start();
    };

    animate();
  }, [animation1, animation2, animation3]);

  return (
    <View style={styles.typing}>
      <Animated.View style={[styles.typingDot, { opacity: animation1 }]} />
      <Animated.View style={[styles.typingDot, { opacity: animation2 }]} />
      <Animated.View style={[styles.typingDot, { opacity: animation3 }]} />
    </View>
  );
});

export default AnimatedDots;
