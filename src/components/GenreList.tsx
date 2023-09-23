import useGenres, {Genre} from "../hooks/useGenres";
import {List, ListItem, HStack, Image, Button} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/ImageCropper"
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}
const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const {data, isLoading } = useGenres()

    if (isLoading) {
        return (
            <GenreListSkeleton />
        )
    }
    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />
                        <Button onClick={() => onSelectGenre(genre)} fontWeight={(selectedGenre?.id == genre.id) ? 'bold' : 'normal'} variant="link" fontSize="lg">{ genre.name }</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;