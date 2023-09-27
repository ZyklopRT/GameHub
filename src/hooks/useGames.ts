import {GameQuery} from "../App";
import {useInfiniteQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/ApiClient";
import GamesService, {Game} from "../services/GamesService";


const useGames = (gameQuery: GameQuery) => {
    return useInfiniteQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
        // @ts-ignore
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => GamesService.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.search,
                page: pageParam,
                page_size: gameQuery.pageSize
            }
        }),
        keepPreviousData: true,
        staleTime: 24 * 60 * 60 * 1000, // 24h,
        getNextPageParam: (lastPage, allPages) => {
            return (lastPage.next) ? allPages.length + 1 : undefined;
        }
    });
}

export default useGames;