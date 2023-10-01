import { HStack, Icon, Tooltip } from "@chakra-ui/react";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Tooltip label={platform.name} fontSize="md" key={platform.name}>
                    <span tabIndex={0}>
                        <Icon as={IconMap[platform.slug]} color="gray.500"></Icon>
                    </span>
        </Tooltip>
      ))}
    </HStack>
  );
};

export default PlatformIconList;