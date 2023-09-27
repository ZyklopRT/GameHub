import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/ApiClient";
import genres from "../data/genres";
import GenresService, {Genre} from "../services/GenresService";

const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>({
        // @ts-ignore
        queryKey: ['genres'],
        queryFn: GenresService.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: () => genres,
        initialDataUpdatedAt: 1695751349568
    })
}

export default useGenres;