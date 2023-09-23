import platforms from "../data/platforms";

export interface Platform {
    id: number;
    slug: string;
    name: string
}

const usePlatforms = () => ({data: platforms, isLoading: false, error: null })

export default usePlatforms;