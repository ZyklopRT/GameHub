import {Box, Heading, HStack, Image, Show} from "@chakra-ui/react";
import {ColorModeSwitch} from "./ColorModeSwitch";
import logo from "../assets/logo.webp"

export const Navbar = () => {
    return (
        <>
            <HStack justifyContent="space-between">
                <HStack>
                    <Image src={logo} boxSize="60px"></Image>
                    <Show above="lg">
                        <Heading fontSize="xl">GameHub</Heading>
                    </Show>
                </HStack>
                <ColorModeSwitch></ColorModeSwitch>
            </HStack>
        </>
    );
};