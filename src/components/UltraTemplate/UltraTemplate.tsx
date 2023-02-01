import React from 'react';
import { colors } from '@theme';
import { SafeAreaView, StatusBar } from 'react-native';
import * as S from './styles';

interface UltraTemplateProps {
  noPadding?: boolean
  children: React.ReactNode
}

const UltraTemplate: React.FC<UltraTemplateProps> = ({
  children,
  noPadding = false,
}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <S.SafeAreaView backgroundColor={colors['background']}>
        <S.Container noPadding={noPadding}>
          {children}
        </S.Container>
      </S.SafeAreaView>
    </>
  )
};

export default UltraTemplate;
