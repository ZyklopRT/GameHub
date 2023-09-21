import {HStack, Image } from "@chakra-ui/react";
import {ColorModeSwitch} from "./ColorModeSwitch";
import logo from "../assets/logo.webp"
export const Navbar = () => {
    return (
        <>
            <HStack justifyContent="space-between">
               <Image src={logo} boxSize="60px"></Image>
               <ColorModeSwitch></ColorModeSwitch>
            </HStack>
        </>
    );
};