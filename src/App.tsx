import {Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import {Navbar} from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import {Genre} from "./services/GenresService";
import {Platform} from "./services/ParentPlatformService";



function App() {

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '250px 1fr'
            }}
        >
            <GridItem area="nav">
                <Navbar />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5} paddingY="10px">
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem area="main" padding="10px">
                <GameHeading/>
                <HStack spacing={4} marginY={3}>
                    <PlatformSelector/>
                    <SortSelector/>
                </HStack>
                <GameGrid/>
            </GridItem>
        </Grid>
    );
}

export default App
