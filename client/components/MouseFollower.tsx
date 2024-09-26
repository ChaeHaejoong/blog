import styled from "styled-components";

const Box = styled.div<{x: string, y: string}>`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: ${props => props.x};
  top: ${props => props.y};
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  white-space: pre-line;
  font-family: Line-rg;
`


interface MouseFollowerProps {
  isHovered: boolean;
  x: string;
  y: string;
  text: string;
}

export default function MouseFollower(props: MouseFollowerProps) {

  const {isHovered, x, y, text} = props;
  return(
     
    isHovered 
    && 
    <Box x={x} y={y}>
      {text}
    </Box>
    
  )
}