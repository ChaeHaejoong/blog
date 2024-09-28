import styled from "styled-components";

const Cntnr = styled.div`
  height: 250px;
  padding: var(--sidePadding);
`
const TitleCntnr = styled.div`
  display: flex;
  align-items: flex-end;
`
const Image = styled.img`
  width: 50px;
  object-fit: contain;
`
const Title = styled.h3`
  font-family: Line-rg;
  font-size: 20px;
  margin-left: 5px;
`

export default function CategoryCntnr() {
  return (
    <Cntnr>
      <TitleCntnr>
        <Image
          src="categoryImages/javascript.png"
        ></Image>
        <Title>JAVASCRIPT</Title>
      </TitleCntnr>
    </Cntnr>
  )
}