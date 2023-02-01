import styled from 'styled-components/native';

interface TextProps {
  size: number
  weight: string
  color: string
}

export const Text = styled.Text<TextProps>`
  font-size: ${({size}) => size}px;
  font-weight: ${({weight}) => weight};
  color: ${({color}) => color};
`;