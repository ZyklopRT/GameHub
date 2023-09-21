import {HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
export const Navbar = () => {
    return (
        <>
            <HStack>
               <Image src={logo} boxSize="60px"></Image>
                <Text>Navbar</Text>
            </HStack>
        </>
    );
};