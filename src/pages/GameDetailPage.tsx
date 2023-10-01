import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

export const GameDetailPage = () => {

  const {slug} = useParams();
  const {data: game, error, isLoading} = useGame(slug!)

  if (isLoading) return <Spinner></Spinner>

  if (error || !game) throw error


  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>
        {game.description_raw}
      </Text>
    </>
  );
};