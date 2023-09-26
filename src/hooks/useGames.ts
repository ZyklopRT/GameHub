import {GameQuery} from "../App";
import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/ApiClient";
import GamesService, {Game} from "../services/GamesService";


const useGames = (gameQuery: GameQuery) => {
    return useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
        // @ts-ignore
        queryKey: ['games', gameQuery],
        queryFn: () => GamesService.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.search
            }
        }),
    });
}

export default useGames;