import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery
}
const GameHeading = ({gameQuery}: Props) => {
    const genresResponse = useGenres()
    const genre = genresResponse.data?.results.find(genre => genre.id == gameQuery.genreId )
    const platformsResponse = usePlatforms();
    const platform = platformsResponse.data?.results.find(platform => platform.id == gameQuery.platformId )

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
    return (
        <Heading as="h1" fontSize="5xl" marginY={4}>{heading}</Heading>
    );
};

export default GameHeading;