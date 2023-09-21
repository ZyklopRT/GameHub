import {HStack, useColorMode, Switch, Text} from "@chakra-ui/react";

export const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();

    return (
        <HStack padding="10px">
            <Switch isChecked={colorMode == 'dark'} onChange={toggleColorMode}/>
            <Text>{ colorMode.charAt(0).toUpperCase() + colorMode.slice(1) } Mode</Text>
        </HStack>
    );
};