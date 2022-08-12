import styled from "styled-components";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useState } from "react";
import { data } from "../data";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: hsl(0, 0%, calc(var(--lightness-offset, 0%) + 78%));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  cursor: pointer;
  z-index: 2;

  :hover {
    --lightness-offset: 20%;
  }
`;

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
  transition: all 0.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) => props.background};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  user-select: none;
`;

const Img = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 65px;
`;
const Description = styled.p`
  font-size: 24px;
  margin: 50px 0;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 15px 30px;
  color: white;
  background: hsl(
    0,
    0%,
    calc(var(--lightness-offset, 0%) + var(--lightness, 0%))
  );
  border-radius: 25px;
  border: none;
  cursor: pointer;

  :hover {
    --lightness-offset: 20%;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper index={slideIndex}>
        {data.map((slide) => {
          return (
            <Slide background={slide.bg} key={slide.id}>
              <ImgContainer>
                <Img src={slide.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
                <Link to="/products">
                  <Button>SHOP</Button>
                </Link>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
