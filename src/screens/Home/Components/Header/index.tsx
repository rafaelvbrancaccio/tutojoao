import React from 'react';
import {StyledHeader, StyledHeaderImage, StyledHeaderText} from './style';
import {User} from '../../../../types/User';

interface OwnProps {
  currentUser: User;
}

const Header = (props: OwnProps) => {
  return (
    <StyledHeader>
      <StyledHeaderImage
        source={{
          uri: props.currentUser.image,
        }}
      />
      <StyledHeaderText>Olá, {props.currentUser.name}</StyledHeaderText>
    </StyledHeader>
  );
};

export default Header;
