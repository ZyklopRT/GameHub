import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/ApiClient";
import genres from "../data/genres";

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>({
        // @ts-ignore
        queryKey: ['genres'],
        queryFn: () => {
            return apiClient
                .get<Genre[]>('/genres')
                .then(res => res.data)
        },
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: () => ({ count: genres.length, results: genres, next: null, previous: null }),
        initialDataUpdatedAt: 1695751349568
    })
}

export default useGenres;