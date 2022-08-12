import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background: #5603ad;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ fontSize: "12px" })}
`;

const Announcements = () => {
  return (
    <Container>
      Free Shipping On All Orders Above $70 (Limited Time Only)
    </Container>
  );
};

export default Announcements;
