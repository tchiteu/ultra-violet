import styled from 'styled-components/native';

interface SafeAreaViewProps {
  backgroundColor: string
}

interface ContainerProps {
  noPadding: boolean
}

export const SafeAreaView = styled.SafeAreaView<SafeAreaViewProps>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({backgroundColor}) => backgroundColor};
  `;

export const Container = styled.View<ContainerProps>`
  padding: ${({noPadding}) => noPadding ? '0' : '18px 24px'};
`;