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
const FormCntnr = styled.div`
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

  const handleOverlayClick = () => {
    setIsModalOn(false);
  }
  const handleInputCntnrClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return(
    <Overlay isModalOn={isModalOn} onClick={handleOverlayClick}>
      <InputCntnr onClick={handleInputCntnrClick}>
        <Title>관리자 권한 접근 비밀번호 입력</Title>
        <FormCntnr>
          <Input type="password"></Input>
          <Button>전송</Button>
        </FormCntnr>
      </InputCntnr>
    </Overlay>
  )
}