import {Input, InputGroup, InputLeftAddon, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {FormEvent, useRef} from "react";

interface Props {
    onSearch: (searchInput: string) => void;
}
const SearchInput = ({onSearch}: Props) => {

    const searchRef = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value)
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={searchRef} variant="filled" borderRadius={20} placeholder="Search games..."/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;