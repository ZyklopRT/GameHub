import {HStack, List, ListItem, Skeleton, SkeletonCircle, SkeletonText, Text} from "@chakra-ui/react";

const GenreListSkeleton = () => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return (
        <List>
            {skeletons.map((skeleton) => (
                <ListItem key={skeleton} paddingY="5px">
                    <HStack>
                        <SkeletonCircle boxSize="32px" />
                        <Skeleton height="20px" width="100px" />
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreListSkeleton;