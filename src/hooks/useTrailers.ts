import ApiClient from "../services/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import ms from "ms";

const useTrailers = (gameId: number) => {

  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`)

  return useQuery({
    queryKey: ["games", gameId, "trailers"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h')
  })
}

export default useTrailers;