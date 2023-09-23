import {HStack,ListItem, Skeleton, SkeletonCircle} from "@chakra-ui/react";

const GenreItemSkeleton = () => {


    return (
        <ListItem paddingY="5px">
            <HStack>
                <SkeletonCircle boxSize="32px" />
                <Skeleton height="20px" width="100px" />
            </HStack>
        </ListItem>
    );
};

export default GenreItemSkeleton;