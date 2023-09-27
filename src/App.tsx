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

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    search: string;
    pageSize: 30;
}

function App() {
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
                <Navbar onSearch={(search) => setGameQuery({...gameQuery, search})}></Navbar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5} paddingY="10px">
                    <GenreList selectedGenreId={gameQuery.genreId}
                               onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}/>
                </GridItem>
            </Show>
            <GridItem area="main" padding="10px">
                <GameHeading gameQuery={gameQuery}/>
                <HStack spacing={4} marginY={3}>
                    <PlatformSelector selectedPlatformId={gameQuery.platformId}
                                      onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                </HStack>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    );
}

export default App
