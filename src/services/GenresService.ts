import ApiClient from "./ApiClient";

export interface Genre {
    id: number
    name: string
    image_background: string
}

export default new ApiClient<Genre>('/genres');