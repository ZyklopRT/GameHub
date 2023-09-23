import { HStack, Image} from "@chakra-ui/react";
import {ColorModeSwitch} from "./ColorModeSwitch";
import logo from "../assets/logo.webp"
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchInput: string) => void;
}

export const Navbar = ({onSearch}: Props) => {
    return (
        <>
            <HStack padding='10px'>
                <Image src={logo} boxSize="60px"></Image>
                <SearchInput onSearch={(searchInput) => onSearch(searchInput)} />
                <ColorModeSwitch></ColorModeSwitch>
            </HStack>
        </>
    );
};