import React, { useState } from 'react';
import { colors } from '@theme';
import * as S from './styles';

interface UltraInputProps {
  color?: keyof typeof colors
}

const UltraInput: React.FC<UltraInputProps> = ({
  color = 'text_primary',
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  }

  const onBlur = () => {
    setFocus(false);
  }
  
  return (
    <S.InputContainer focus={focus}>
      <S.Input
        color={colors[color]}
        focus={focus}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </S.InputContainer>
  );
};

export default UltraInput;
