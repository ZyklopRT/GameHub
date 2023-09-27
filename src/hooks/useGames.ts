import {GameQuery} from "../App";
import {useInfiniteQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/ApiClient";
import GamesService, {Game} from "../services/GamesService";
import ms from "ms";


const useGames = (gameQuery: GameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
        // @ts-ignore
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => GamesService.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.search,
                page: pageParam,
                page_size: gameQuery.pageSize
            }
        }),
        keepPreviousData: true,
        staleTime: ms('24h'),
        getNextPageParam: (lastPage, allPages) => {
            return (lastPage.next) ? allPages.length + 1 : undefined;
        }
    });
}

export default useGames;