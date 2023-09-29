import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "./store";

const PlatformSelector = () => {

  const [gameQuery, setPlatformId] = useGameQueryStore(s => [s.gameQuery, s.setPlatformId]);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(gameQuery.platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
          <MenuItem key={platform.id}
                    onClick={() => setPlatformId(platform.id)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;