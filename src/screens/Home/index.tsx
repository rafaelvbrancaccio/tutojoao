import React from "react";
import { View, Text } from "react-native";
import { Container, StyledPageName } from "./styles";
import { Header } from "./Components";

const Home = () => {
    return (
        <Container>
            <Header></Header>
            <StyledPageName>Galeria de Mostradores</StyledPageName>
        </Container>
    )
}

export default Home;