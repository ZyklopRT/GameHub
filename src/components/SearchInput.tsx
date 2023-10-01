import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FormEvent, useRef } from "react";
import useGameQueryStore from "./store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {

  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      setSearchText(searchRef.current.value);
      navigate("/");
    }
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={searchRef} variant="filled" borderRadius={20} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;