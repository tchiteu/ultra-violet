import React from 'react';
import { colors } from '@theme';
import UltraText from '@components/UltraText';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import * as S from './styles';

interface UltraButtonProps {
  color?: keyof typeof colors
  onPress?(): void
  children?: string
}

const UltraButton: React.FC<UltraButtonProps> = ({
  onPress = () => {},
  color = 'primary',
  children = ''
}) => {

  const AnimatedPressable = Animated.createAnimatedComponent(S.Pressable);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value
    };
  });

  const onPressIn = () => {
    scale.value = withTiming(0.97, { duration: 100 });
    opacity.value = withTiming(0.9, { duration: 100 });
  }

  const onPressOut = () => {
    opacity.value = withTiming(1, { duration: 50 });
    scale.value = withTiming(1, { duration: 80 });
  }

  return (
    <AnimatedPressable
      delayPressIn={0}
      style={animatedStyle}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <S.Background color={colors[color]}>
        <UltraText size="md" weight="bold">{children}</UltraText>
      </S.Background>
    </AnimatedPressable>
  );
};

export default UltraButton;
