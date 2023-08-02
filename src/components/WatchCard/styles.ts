import styled from 'styled-components/native';
import {APP_COLORS} from '../../constants/colors';

export const StyledContainer = styled.View`
  background-color: ${() => APP_COLORS.background};
  width: 98%;
  height: 125;
  border-radius: 16px;
  padding: 8px;
  margin: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledImageContainer = styled.View`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledInfoGroup = styled.View`
  display: flex;
  width: 50%;
`;

export const StyledImage = styled.Image`
  width: 100;
  height: 100;
  border-radius: 45px;
  object-fit: contain;
`;
