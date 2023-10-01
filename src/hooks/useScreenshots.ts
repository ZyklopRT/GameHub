import ApiClient from "../services/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import ms from "ms";
import { Screenshot } from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {

  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`)

  return useQuery({
    queryKey: ["games", gameId, "screenshots"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
  })
}

export default useScreenshots;