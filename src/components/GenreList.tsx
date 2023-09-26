import useGenres from "../hooks/useGenres";
import {List, ListItem, HStack, Image, Button, Heading} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/ImageCropper"
import GenreItemSkeleton from "./GenreItemSkeleton";
import {Genre} from "../services/GenresService";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}
const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const {data, isLoading, error } = useGenres()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    return (
        <>
            <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
            <List>
                {isLoading && skeletons.map(skeleton => <GenreItemSkeleton key={skeleton} />)}
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} objectFit='cover'/>
                            <Button onClick={() => onSelectGenre(genre)} fontWeight={(selectedGenre?.id == genre.id) ? 'bold' : 'normal'} variant="link" fontSize="lg" whiteSpace='normal' textAlign='left'>{ genre.name }</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;