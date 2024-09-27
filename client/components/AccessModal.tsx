import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
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
  animation: ${({ isModalOn }) => (isModalOn ? fadeIn : fadeOut)} 0.5s;
`
const InputCntnr = styled.div`
  width: 300px;
  height: 170px;
  background-color: white;
  border-radius: 10px;
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

  return(
    <Overlay isModalOn={isModalOn} onClick={handleOverlayClick}>
      <InputCntnr>
        
      </InputCntnr>
    </Overlay>
  )
}