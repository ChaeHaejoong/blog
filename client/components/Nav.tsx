import styled from "styled-components";

const NavCntnr = styled.ul`
  height: 80px;
  border-bottom: 1px solid #ddd;
  display: flex;
  place-items: center;
  padding: var(--sidePadding);
  font-family: Line-rg;
`
const Logo = styled.img`
  width: 70px; 
  cursor: pointer;
`
const Spacer = styled.div`
  flex-grow: 1;
`
const NavItem = styled.li`
  margin: 20px;

  &:hover {
    color: var(--duckOrange);
    cursor: pointer;
  }
`

export default function Nav() {

  return(
    <NavCntnr>
      <Logo src="images/logo.png"></Logo>
      <Spacer></Spacer>
      <NavItem>블로그</NavItem>
      <NavItem>프로젝트</NavItem>
      <NavItem>카테고리</NavItem>
      <NavItem>활동</NavItem>
    </NavCntnr>
  )
}