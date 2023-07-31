import styled from 'styled-components/native';

export const StyledHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #d9d9d9;
    color: #2A3B3F;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 16px;

`;

export const StyledHeaderImage = styled.Image`
    height: 77px;
    width: 77px;
    border-radius: 39px;
`;

export const StyledHeaderText = styled.Text`
    margin-left: 16px;
    font-size: 24px;
    font-weight: bold;
`;