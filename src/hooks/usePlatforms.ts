import platforms from "../data/platforms";
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/ApiClient";

export interface Platform {
    id: number;
    slug: string;
    name: string
}

const usePlatforms = () => {
    return useQuery<FetchResponse<Platform>, Error, FetchResponse<Platform>>({
        // @ts-ignore
        queryKey: ['platforms'],
        queryFn: () => {
            return apiClient
                .get<Platform[]>('/platforms/lists/parents')
                .then(res => res.data)
        },
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: {count: platforms.length, results: platforms, next: null, previous: null},
        initialDataUpdatedAt: 1695751349568
    })
}

export default usePlatforms;