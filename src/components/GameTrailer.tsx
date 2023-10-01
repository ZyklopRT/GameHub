import useTrailers from "../hooks/useTrailers";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

export const GameTrailer = ({ game }: Props) => {

  const { data, error, isLoading } = useTrailers(game.id);

  if (error) throw error;

  if (isLoading) return null;

  const first = data?.results[0];

  return first ? (<video src={first.data[480]} poster={first.preview} controls />) : null;
};