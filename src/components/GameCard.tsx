import {Card, CardBody, Heading, Image, HStack} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from '../services/ImageCropper';
import Emoji from "./Emoji";
import {Game} from "../services/GamesService";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card variant="filled">
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack marginBottom={4} justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;