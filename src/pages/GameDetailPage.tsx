import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, GridItem } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import { GameTrailer } from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

export const GameDetailPage = () => {

  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error;


  return (
    <>
      <SimpleGrid columns={{
        base: 1,
        md: 2
      }} spacing={5} marginBottom={4}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText maxChars={500}>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};