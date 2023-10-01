import { useQuery } from "@tanstack/react-query";
import GamesService from "../services/GamesService";
import ms from "ms";

const useGame = (slug: string) => {

  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => GamesService.get(slug),
    staleTime: ms("24h")
  });
};

export default useGame;