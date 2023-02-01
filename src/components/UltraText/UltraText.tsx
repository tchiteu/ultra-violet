import React from 'react';
import { Text } from './styles';
import { colors, fontSizes } from '@theme';


interface UltraTextProps {
  size?: keyof typeof fontSizes
  weight?: 'thin' | 'normal' | 'bold'
  color?: keyof typeof colors
  pressing?: boolean
  children: string
}

const UltraText: React.FC<UltraTextProps> = ({
  size = 'sm',
  weight = 'normal',
  color = 'text_primary',
  children
}) => {
  return (
    <Text
      size={fontSizes[size]}
      weight={weight}
      color={colors[color]}
    >
      {children}
    </Text>
  );
}

export default UltraText;