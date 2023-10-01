import platforms from "../data/platforms";
import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "../services/ApiClient";
import ParentPlatformService from "../services/ParentPlatformService";
import ms from "ms";
import { Platform } from "../entities/Platform";

const usePlatforms = () => {
    return useQuery<FetchResponse<Platform>, Error, FetchResponse<Platform>>({
        // @ts-ignore
        queryKey: ['platforms'],
        queryFn: ParentPlatformService.getAll,
        staleTime: ms('24h'),
        initialData: platforms,
        initialDataUpdatedAt: 1695751349568
    })
}

export default usePlatforms;