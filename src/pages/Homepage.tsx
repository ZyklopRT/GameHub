import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

export const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingRight={5} paddingY="10px">
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
};