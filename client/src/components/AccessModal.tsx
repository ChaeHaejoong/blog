import axios, { isAxiosError } from "axios";
import { useState } from "react";
import styled, {keyframes} from "styled-components";
import errorHandler from "../utils/errorHandler";
import { useDispatch } from "react-redux";
import { permit } from "../store/Slices/accessSlice";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
const Overlay = styled.div<{ isModalOn: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  animation: ${({ isModalOn }) => (isModalOn ? fadeIn : "")} 0.5s;
`
const InputCntnr = styled.div`
  width: 300px;
  height: 170px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  place-items: center;
  font-family: Line-rg;
`
const Title = styled.p`
  font-size: 20px;
`
const FormCntnr = styled.form`
  display: flex;
  width: 100%;
  padding: 0 20px;
  justify-content: center;
  gap: 10px;
`
const Input = styled.input`
  width: 60%;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0 10px;
  transition: all 0.1s;

  &:focus {
    outline: none;
    border: 1px solid var(--duckOrange);
  }
`
const AlertBox = styled.div<{accessFail: boolean}>`
  width: 100%;
  background-color: tomato;
  height: ${({accessFail}) => (accessFail ? '35px' : '0px')};
  transition: all 1s;
  display: flex;
  justify-content: center;
  place-items: center;
  color: white;
`
const Button = styled.button<{isKeyPressed: boolean}>`
  height: 30px;
  width: 50px;
  border: 1px solid var(--duckOrange);
  border-radius: 10px;
  background-color: ${({isKeyPressed}) => (isKeyPressed ? 'var(--duckOrange)' : 'white')};
  color: ${({isKeyPressed}) => (isKeyPressed ? 'white' : 'var(--duckOrange)')};;

  &:hover {
    background-color: var(--duckOrange);
    color: white;
  }
`

interface AccessModalProps {
  isModalOn: boolean;
  setIsModalOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AccessModal(props: AccessModalProps) {

  const { isModalOn, setIsModalOn } = props;

  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);
  const [accessFail, setAccessFail] = useState<boolean>(false);
  const [accessKey, setAccessKey] = useState<string>("");

  const dispatch = useDispatch();

  const modalOff = () => {
    setIsModalOn(false);
  }

  const handleInputCntnrClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessKey(e.target.value);
  }
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsKeyPressed(true);
      handleFormSubmit(e)
    }
  }
  const handleKeyUp =() => {
    setIsKeyPressed(false);
  }
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/access', { accessKey })
      if (response.status === 200) {
        dispatch(permit());
        modalOff();
      } 
    }
    catch (e) {
      if (isAxiosError(e)) {
        if (e.status === 401) {
          setAccessKey("");
          setAccessFail(true);
          setTimeout(() => {
            setAccessFail(false);
          }, 2000)
        }
        else {
          errorHandler(e);
        }
      } 
    }
  }

  return(
    <Overlay isModalOn={isModalOn} onClick={modalOff}>
      <InputCntnr onClick={handleInputCntnrClick}>
        <Title>관리자 권한 접근 비밀번호 입력</Title>
        <FormCntnr onSubmit={handleFormSubmit}>
          <Input 
            type="password"
            value={accessKey}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            onKeyUp={handleKeyUp}
          ></Input>
          <Button 
            type="submit"
            isKeyPressed={isKeyPressed}
          >전송</Button>
        </FormCntnr>
        <AlertBox accessFail={accessFail}>비밀번호 그거 아닌데</AlertBox>
      </InputCntnr>
    </Overlay>
  )
}