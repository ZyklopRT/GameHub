import { Game } from "../entities/Game";
import { DefinitionItem } from "./DefinitionItem";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";

interface Props {
  game: Game
}
const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={{
      base: 2,
      lg: 5
    }} as="dl">
      <DefinitionItem term='Platforms'>
        {game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term='Publishers'>
        {game.publishers?.map((publisher) => <Text key={publisher.id}>{publisher.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term='Released'>
        {game.released}
      </DefinitionItem>
    </SimpleGrid>
  );
};
export default GameAttributes;