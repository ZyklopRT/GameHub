import useGenres from "../hooks/useGenres";
import { Button, Heading, HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/ImageCropper";
import GenreItemSkeleton from "./GenreItemSkeleton";
import useGameQueryStore from "./store";

const GenreList = () => {

  const [gameQuery, setGenreId] = useGameQueryStore((s) => [s.gameQuery, s.setGenreId]);
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">Genres</Heading>
      <List>
        {isLoading && skeletons.map(skeleton => <GenreItemSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8}
                     objectFit="cover" />
              <Button onClick={() => setGenreId(genre.id)}
                      fontWeight={(gameQuery.genreId == genre.id) ? "bold" : "normal"} variant="link" fontSize="lg"
                      whiteSpace="normal" textAlign="left">{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;