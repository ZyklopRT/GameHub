import {Box, Button, SimpleGrid, useToast} from '@chakra-ui/react'
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {GameQuery} from "../App";
import React from 'react';

interface Props {
    gameQuery: GameQuery
}
const GameGrid = ({gameQuery}: Props) => {
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];
    const gameErrorToastId = 'game-error-toast';
    const toast = useToast();

    if (error) {
        if (!toast.isActive(gameErrorToastId)) {
            toast({
                id: gameErrorToastId,
                title: 'Network Error',
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
            });
        }

        return null;
    };

    return (
        <Box padding="10px">
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={6}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
            {hasNextPage && <Button
                colorScheme='teal'
                isLoading={isFetchingNextPage}
                onClick={() => fetchNextPage()}
                spinnerPlacement='end'
                loadingText='Loading'
                marginY={5}
            >Load more</Button>}

        </Box>
    );
};

export default GameGrid;