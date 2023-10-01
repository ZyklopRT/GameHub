import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number
}
const GameScreenshots = ({gameId}: Props) => {

  const {data, error, isLoading} = useScreenshots(gameId);

  if (error) throw error;

  if (isLoading) return null;

  return (
    <SimpleGrid columns={{
      base: 1,
      md: 2
    }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} alt="Screenshot of the game" objectFit="cover"></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;