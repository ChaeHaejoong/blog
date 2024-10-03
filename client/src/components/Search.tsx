import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Cntnr = styled.div`
  height: 60px;
  padding: var(--sidePadding);
  display: flex;
  place-items: center;
  justify-content: flex-end;
  margin-botom: 50px;
`
const Input = styled.input`
  width: 250px;
  height: 50%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0 10px;
  transition: all 0.1s;
  font-family: Line-rg;
  margin-right: 10px;

  &:focus {
    outline: none;
    border: 1px solid var(--duckOrange);
  }
`
const Button = styled.button`
  height: 50%;
  width: 90px;
  border: 1px solid var(--duckOrange);
  border-radius: 10px;
  background-color: white;
  color: var(--duckOrange);
  font-family: Line-rg;
  font-size: 16px;

  &:hover {
    background-color: var(--duckOrange);
    color: white;
  }
`
const Spacer = styled.div`
  flex-grow: 1;
`

export default function Search() {

  const isAccessed = useSelector((state: RootState) => state.access.isAccessed);
  
  return (
    <Cntnr>
      {isAccessed && <Button>추가하기</Button>}
      <Spacer></Spacer>
      <Input></Input>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </Cntnr>
  )
}