import {Text, SimpleGrid, useToast} from '@chakra-ui/react'
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from '../hooks/useGenres';
import {Platform} from "../hooks/usePlatforms";
import {GameQuery} from "../App";

interface Props {
    gameQuery: GameQuery
}
const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    const gameErrorToastId = 'game-error-toast';
    const toast = useToast();

    if (error) {
        if (!toast.isActive(gameErrorToastId)) {
            toast({
                id: gameErrorToastId,
                title: 'Network Error',
                description: error,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }

        return null;
    };

    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={6}
            paddingY="15px"
        >
            {isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
            {!isLoading && data.map((game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};

export default GameGrid;