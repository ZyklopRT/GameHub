import {Button, Heading, HStack, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {Platform} from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

    const {data, error} = usePlatforms();

    if (error) return null;

    return (
        <HStack justifyContent="space-between">
            <Heading>{ selectedPlatform?.name || 'All' } Games</Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                    {selectedPlatform?.name || 'Platforms'}
                </MenuButton>
                <MenuList>
                    {data.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
                </MenuList>
            </Menu>
        </HStack>
    );
};

export default PlatformSelector;