import useGenres from "../hooks/useGenres";
import {List, ListItem, HStack, Image, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/ImageCropper"

export const GenreList = () => {

    const {data } = useGenres()

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />
                        <Text fontSize="lg">{ genre.name }</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};