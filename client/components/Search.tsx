import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

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

export default function Search() {
  return (
    <Cntnr>
      <Input></Input>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </Cntnr>
  )
}