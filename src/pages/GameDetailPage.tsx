import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import { DefinitionItem } from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import { GameTrailer } from "../components/GameTrailer";

export const GameDetailPage = () => {

  const {slug} = useParams();
  const {data: game, error, isLoading} = useGame(slug!)

  if (isLoading) return <Spinner></Spinner>

  if (error || !game) throw error


  return (
    <SimpleGrid columns={{
      sm: 1,
      md: 2
    }}>
      <Box>
        <Heading>{game.name}</Heading>
        <Box marginY={4}>
          <ExpandableText>
            {game.description_raw}
          </ExpandableText>
        </Box>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer game={game} />
      </Box>
    </SimpleGrid>
  );
};