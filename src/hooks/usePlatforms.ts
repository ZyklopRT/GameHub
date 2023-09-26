import platforms from "../data/platforms";
import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/ApiClient";
import ParentPlatformService, {Platform} from "../services/ParentPlatformService";

const usePlatforms = () => {
    return useQuery<FetchResponse<Platform>, Error, FetchResponse<Platform>>({
        // @ts-ignore
        queryKey: ['platforms'],
        queryFn: ParentPlatformService.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: {count: platforms.length, results: platforms, next: null, previous: null},
        initialDataUpdatedAt: 1695751349568
    })
}

export default usePlatforms;