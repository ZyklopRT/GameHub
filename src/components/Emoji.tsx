import meh from '../assets/emojis/meh.webp';
import thumbsUp from '../assets/emojis/thumbs-up.webp';
import bullseye from '../assets/emojis/bulls-eye.webp';
import {ImageProps, Image} from "@chakra-ui/react";

interface Props {
    rating: number
}
const Emoji = ({rating}: Props) => {

    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: {src: meh, alt: 'meh', boxSize: '25px' },
        4: {src: thumbsUp, alt: 'recommended', boxSize: '25px'},
        5: {src: bullseye, alt: 'exceptional', boxSize: '35px'},
    }

    // @ts-ignore
    return (
        <Image {...emojiMap[rating]} marginTop={1} />
    );
};

export default Emoji;