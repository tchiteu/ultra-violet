import styled from 'styled-components/native';
import { colors, fontSizes } from '@theme';

interface InputContainerProps {
  focus: boolean
}

interface InputProps {
  color: string
  focus: boolean
}

export const InputContainer = styled.View<InputContainerProps>`
  border-radius: 20px;
  border: 4px solid ${({focus}) => focus ? colors.dark_blue : 'transparent'};
`

export const Input = styled.TextInput<InputProps>`
  font-size: ${fontSizes.md}px;
  background-color: ${colors.background_secondary};
  color: ${({color}) => color};
  border: 2px solid ${({focus}) => focus ? colors.primary : '#444955'};
  padding: 14px 18px;
  border-radius: 16px;
`;