import useData from "./useData";
import {Genre} from "./useGenres";
import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.search
        }
    },
    [gameQuery])

export default useGames;