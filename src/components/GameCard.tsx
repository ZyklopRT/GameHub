import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/ImageCropper";
import Emoji from "./Emoji";
import { Game } from "../services/GamesService";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (

    <Card variant="filled">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={4} justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>
            {game.name}<Emoji rating={game.rating_top} />
          </Link>
        </Heading>
      </CardBody>
    </Card>

  );
};

export default GameCard;