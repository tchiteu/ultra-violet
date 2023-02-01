import styled from 'styled-components/native';

interface BackgroundProps {
  color: string
}

export const Background = styled.View<BackgroundProps>`
  display: flex;
  width: 100%;
  background-color: ${({color}) => color};
  border: solid 1px #FFFFFF25;
  align-items: center;
  padding: 14px;
  border-radius: 16px;
`;

export const Pressable = styled.TouchableWithoutFeedback``;
