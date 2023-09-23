import useData from "./useData";

export interface Platform {
    id: number;
    slug: string;
    name: string
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;