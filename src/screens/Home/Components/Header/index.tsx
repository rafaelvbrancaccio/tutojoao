import  React from 'react';
import { StyledHeader, StyledHeaderImage, StyledHeaderText } from './style';
import { Image, Text } from 'react-native';

// interface OwnProps {
//     name: string;
//     image: string;
// }

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderImage source={{uri: 'https://149351363.v2.pressablecdn.com/wp-content/uploads/2022/06/ronaldinho-gaucho-palestras.jpg'}}/>
            <StyledHeaderText>Olá, user</StyledHeaderText>
        </StyledHeader>
    );
}

export default Header;