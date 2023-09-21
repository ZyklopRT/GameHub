import {Text, SimpleGrid, Heading, Box} from '@chakra-ui/react'
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null
}
const GameGrid = ({selectedGenre}: Props) => {
    const {data, error, isLoading} = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error}</Text>;

    return (
        <>
            <Box padding="10px">
                <Heading>{ (selectedGenre) ? selectedGenre.name : 'All' } Games</Heading>
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
            </Box>
        </>
    );
};

export default GameGrid;