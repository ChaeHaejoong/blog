import styled from "styled-components";

import BannerCard from "./BannerCard";
import MouseFollower from "./MouseFollower";
import useMouseFollower from "../hooks/useMouseFollower";

const BannerCntnr = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  gap: 100px;
  height: 400px;
`;

export default function Banner() {

  const { mousePosition, isHovered, handleMouseEnter, handleMouseLeave } = useMouseFollower();

  return (
    <BannerCntnr>
      <BannerCard
        img="images/github-logo.webp"
        buttonTitle="깃허브 구경하기"
        buttonColor="black"
        link="https://github.com/ChaeHaejoong"
      ></BannerCard>
      <BannerCard
        img="images/boj-og.png"
        buttonTitle="백준 구경하기"
        buttonColor="#1C85C7"
        link="https://www.acmicpc.net/user/svneh0329"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MouseFollower
          isHovered={isHovered}
          x={mousePosition.x}
          y={mousePosition.y}
          text={
            `실버 티어에요.
            자랑할만한 티어가 아니란건 저도 알아요.
            
            미관용이에요.`
          }
        ></MouseFollower>
      </BannerCard>
    </BannerCntnr>
  )
}