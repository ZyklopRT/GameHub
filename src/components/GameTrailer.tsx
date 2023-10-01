import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {

  const { data, error, isLoading } = useTrailers(gameId);

  if (error) throw error;

  if (isLoading) return null;

  const first = data?.results[0];

  return first ? (<video src={first.data[480]} poster={first.preview} controls />) : null;
};