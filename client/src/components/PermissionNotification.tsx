import styled from "styled-components";

const Box = styled.div`
  witdh: 100%;
  height: 40px;
  background-color: #02B864;
  font-family: Line-rg;
  color: white;
  margin: 20px 0;
  display: flex;
  place-items: center;
  justify-content: center;
`
export default function PermissionNotification() {
  return (
    <Box>
      관리자 모드입니다
    </Box>
  )
}