import styled from "styled-components";

const CardCntnr = styled.div`
  width: 290px;
  height: 350px;
  border: 1px solid #ddd;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  place-items: center;
`
const ImageCntnr = styled.img`
  width: 90%;
  height: 200px;
  object-fit: contain;
`
const LinkButton = styled.a<{ bgcolor: string }>`
  text-decoration: none;
  margin-top: 60px;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  background-color: ${props => props.bgcolor};
  font-family: Line-rg;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    opacity: 0.8;
  }
`

interface CardPorps {
  img: string;
  buttonTitle: string;
  buttonColor: string;
  link: string;
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children?: React.ReactNode;
}

export default function BannerCard(props: CardPorps) {

  const {img, buttonTitle, buttonColor, link, onMouseEnter, onMouseLeave, children} = props;

  return(
    <CardCntnr onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ImageCntnr src={img}></ImageCntnr>
      <LinkButton 
        bgcolor={buttonColor}
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
      >{buttonTitle}</LinkButton>
      {children}
    </CardCntnr>
  )
}