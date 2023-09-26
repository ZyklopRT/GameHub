import ApiClient from "./ApiClient";

export interface Platform {
    id: number;
    slug: string;
    name: string
}

export default new ApiClient<Platform>('/platforms/lists/parents');