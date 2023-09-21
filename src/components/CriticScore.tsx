import {Badge} from "@chakra-ui/react";

interface Props {
    score: string
}
const CriticScore = ({score}: Props) => {
    const scoreNumber = parseInt(score)
    const color = scoreNumber > 80 ? 'green' : scoreNumber > 60 ? 'yellow' : '';

    return (
        <Badge colorScheme={color} fontSize="14px" paddingX='10px' borderRadius="4px">{scoreNumber}</Badge>
    );
};

export default CriticScore;