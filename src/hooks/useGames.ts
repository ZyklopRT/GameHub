import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/ApiClient";

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
}


const useGames = (gameQuery: GameQuery) => {
    return useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>({
        // @ts-ignore
        queryKey: ['games', gameQuery],
        queryFn: () => {
            return apiClient
                .get<Game[]>('/games', {
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.search
                    }
                })
                .then(res => res.data)
        },
    });
}

export default useGames;