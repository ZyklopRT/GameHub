import ApiClient from "./ApiClient";
import {Platform} from "./ParentPlatformService";

export interface Game {
    id: number
    slug: string
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
    description: string
    description_raw: string
    released: string
}

export default new ApiClient<Game>('/games');