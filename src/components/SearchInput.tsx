import {Input, InputGroup, InputLeftAddon, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input variant="filled" borderRadius={20} placeholder="Search games..."/>
        </InputGroup>
    );
};

export default SearchInput;