import {Badge} from "@chakra-ui/react";

interface Props {
    score: number
}

const CriticScore = ({score}: Props) => {
    if (!score) return null;

    const color = score > 80 ? 'green' : score > 60 ? 'yellow' : '';

    return (
        <Badge colorScheme={color} fontSize="14px" paddingX='10px' borderRadius="4px">{score}</Badge>
    );
};

export default CriticScore;