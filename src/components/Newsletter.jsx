import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  height: 60vh;
  background-color: #fcf5f5;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "40vh" })}
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 20px;

  ${mobile({ fontSize: "48px" })}
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 30px;

  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  justify-content: space-between;
  border: 1px solid lightgray;
  background-color: white;

  ${mobile({ width: "88%" })}
`;

const Input = styled.input`
  background: transparent;
  border: none;
  flex: 8;
  padding-left: 20px;

  ${mobile({ paddingLeft: "5px" })}
`;
const Button = styled.button`
  background: none;
  border: none;
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #29a3a3;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get the latest updates of your favourite products!
      </Description>
      <InputContainer>
        <Input type="email" placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
