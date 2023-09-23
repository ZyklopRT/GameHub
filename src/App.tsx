import {Box, Grid, GridItem, Heading, HStack, Show} from '@chakra-ui/react'
import {Navbar} from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string
}

function App() {
    document.title = "GameHub"
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
                <Navbar></Navbar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5} paddingY="10px">
                    <GenreList selectedGenre={gameQuery.genre}
                               onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                </GridItem>
            </Show>
            <GridItem area="main" padding="10px">
                <HStack justifyContent="space-between">
                    <Heading>{gameQuery.platform?.name || 'All'} Games</Heading>
                    <HStack spacing={4}>
                        <PlatformSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                    </HStack>
                </HStack>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    );
}

export default App
