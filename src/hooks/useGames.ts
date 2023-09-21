import useData from "./useData";
import {Genre} from "./useGenres";

export interface Platform {
    id: number;
    slug: string;
    name: string
}
export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform}[]
    metacritic: string
}

const useGames = (genre: Genre | null) => useData<Game>('/games', {params: {genres: genre?.id}}, [genre?.id])

export default useGames;