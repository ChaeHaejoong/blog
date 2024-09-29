import axios from "axios";
import { useState } from "react";
import styled, {keyframes} from "styled-components";

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
const Button = styled.button`
  height: 30px;
  width: 50px;
  border: 1px solid var(--duckOrange);
  border-radius: 10px;
  background-color: white;
  color: var(--duckOrange);

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
  const [accessKey, setAccessKey] = useState<string>("");

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
      handleFormSubmit(e)
    }
  }
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/access', { accessKey })
      if(response.status === 200) {
        console.log("로그인 성공")
        modalOff();
      }
      else {
        console.log("로그인 실패")
        modalOff();
      }
    }
    catch (e) {
      console.log("로그인 실패")
      modalOff();    
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
          ></Input>
          <Button type="submit">전송</Button>
        </FormCntnr>
      </InputCntnr>
    </Overlay>
  )
}