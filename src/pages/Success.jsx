import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 40px;
`;
const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #0066ff;
  transition: all 0.3s ease;

  :hover {
    transform: translateY(-1px);
  }
`;
const Vert = styled.div`
  width: 0.5px;
  border: 1px solid gray;
`;

const Success = () => {
  const location = useLocation();

  console.log(location);
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        Your Order has been successfully processed!
        <Buttons>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
          <Vert></Vert>
          <Button>View All Orders</Button>
        </Buttons>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Success;
