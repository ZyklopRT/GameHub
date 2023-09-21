import {Card, CardBody, CardFooter, Skeleton, SkeletonText} from "@chakra-ui/react";

export const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height='200px' />
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
            <CardFooter justify='space-between'>
                <SkeletonText></SkeletonText>
                <SkeletonText></SkeletonText>
            </CardFooter>
        </Card>
    );
};