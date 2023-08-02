import React from 'react';
import {
  StyledContainer,
  StyledImage,
  StyledImageContainer,
  StyledInfoGroup,
} from './styles';
import {Text} from 'react-native';
import {WatchFace} from '../../types/WatchFace';

interface OwnProps {
  watchface: WatchFace;
}

const WatchCard = (props: OwnProps) => {
  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage
          source={{
            uri: props.watchface.preview,
          }}
        />
      </StyledImageContainer>
      <StyledInfoGroup>
        <Text>ID: {props.watchface.id}</Text>
        <Text>Nome: {props.watchface.name}</Text>
        <Text>Secao: {props.watchface.section}</Text>
        <Text>
          Disponível no APP: {props.watchface.available ? 'Sim' : 'Não'}
        </Text>
      </StyledInfoGroup>
    </StyledContainer>
  );
};

export default WatchCard;
