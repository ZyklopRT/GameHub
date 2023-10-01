import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
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
        sm: 1,
        md: 2
      }} spacing={2} marginBottom={4}>
        <Box>
          <Heading>{game.name}</Heading>
          <Box marginY={4}>
            <ExpandableText maxChars={500}>
              {game.description_raw}
            </ExpandableText>
          </Box>
          <GameAttributes game={game} />
        </Box>
        <Box>
          <GameTrailer gameId={game.id} />
        </Box>
      </SimpleGrid>
      <GameScreenshots gameId={game.id} />
    </>
  );
};