import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const NavCntnr = styled.ul`
  height: 80px;
  border-bottom: 1px solid #ddd;
  display: flex;
  place-items: center;
  padding: var(--sidePadding);
  font-family: Line-rg;
`;
const Logo = styled.img`
  width: 70px;
  cursor: pointer;
`;
const Title = styled.p`
  font-size: 25px;
  cursor: pointer;
  font-family: Line-rg;
`;
const Spacer = styled.div`
  flex-grow: 1;
`;
const NavItem = styled.li<NavItemProps>`
  margin: 20px;
  color: ${ ({ active })  => (active ? "var(--duckOrange)" : "black")};

  &:hover {
    color: var(--duckOrange);
    cursor: pointer;
  }
`;

interface NavItemProps {
  active: boolean;
}

export default function Nav() {
  const location = useLocation();

  return (
    <NavCntnr>
      <Link to="/">
        <Logo src="images/logo.png"></Logo>
      </Link>
      <Link to="/">
        <Title>해중.com</Title>
      </Link>
      <Spacer></Spacer>
      <Link to="/blog">
        <NavItem active={location.pathname === "/blog"}>
          블로그
        </NavItem>
      </Link>
      <Link to="/project">
        <NavItem active={location.pathname === "/project"}>
          프로젝트
        </NavItem>
      </Link>
      <Link to="/category">
        <NavItem active={location.pathname === "/category"}>
          카테고리
        </NavItem>
      </Link>
      <Link to="/archive">
        <NavItem active={location.pathname === "/archive"}>
          활동
        </NavItem>
      </Link>
    </NavCntnr>
  );
}
