import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`
const SpinningDuck = styled.img`
  width: 120px;
  margin-bottom: 30px;
  animation: spin 5s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const LoadingMessage = styled.p`
  font-family: Line-rg;
  font-size: 20px;
  color: white;
`

export default function Loading() {
  const [loading, setLoading] = useState<string>("로딩중");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(prev => {
        switch(prev) {
          case "로딩중": return "로딩중.";
          case "로딩중.": return "로딩중..";
          case "로딩중..": return "로딩중...";
          default: return "로딩중";
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Overlay>
      <SpinningDuck src="images/logo.png" />
      <LoadingMessage>{loading}</LoadingMessage>
    </Overlay>
  );
}