import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, Image, CardFooter, HStack} from "@chakra-ui/react";
import {PlatformIconList} from "./PlatformIconList";
import {CriticScore} from "./CriticScore";
import getCroppedImageUrl from '../services/ImageCropper';

interface Props {
    game: Game
}

export const GameCard = ({game}: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
            <CardFooter justify='space-between'>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                <CriticScore score={game.metacritic} />
            </CardFooter>
        </Card>
    );
};