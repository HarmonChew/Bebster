import styled from "styled-components";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
`;
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
  align-self: center;
`;

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background: #f6baba;
  color: #f74343;
  border-radius: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 80%;
  background: transparent;
  border: 1.5px solid #838383;
  padding: 10px;
  border-radius: 5px;

  :hover {
    border: 1.5px solid #4f4f4f;
  }

  :focus {
    outline: none;
    border: 1.5px solid #292929;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #969696;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const SignIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

const SignInText = styled.label`
  user-select: none;
`;
const ForgotPassword = styled.span`
  align-self: center;
  cursor: pointer;
`;

const Agreement = styled.div`
  width: 400px;
  align-self: center;
  text-align: center;
  letter-spacing: 0.6px;
  margin-bottom: 10px;
  font-size: 11px;
`;
const Links = styled.span`
  color: #6dd5f7;
  cursor: pointer;
`;
const Join = styled.button`
  width: max-content;
  align-self: center;
  padding: 15px 50px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  background-color: hsl(0, 0%, calc(var(--lightness-offset, 0%) + 0%));
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-bottom: 20px;

  &:disabled {
    color: black;
    cursor: progress;
  }

  :hover {
    --lightness-offset: 25%;
  }
`;
const Member = styled.span`
  align-self: center;
  font-size: 14px;
`;

const Return = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 14px;
  color: #4b4bb3;
  cursor: pointer;
  margin-top: 15px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>EVERYTHING BEBSTER AT YOUR FINGERTIPS</Title>
        {error && <Error>Wrong username or password!</Error>}
        <Form>
          <Input
            placeholder="Email address"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
          <Options>
            <SignIn>
              <Checkbox type="checkbox" value="signIn" id="signIn" />
              <SignInText htmlFor="signIn">Keep me signed in</SignInText>
            </SignIn>
            <ForgotPassword>Forgot Password?</ForgotPassword>
          </Options>
          <Agreement>
            By logging in, you agree to Bebster's &nbsp;
            <Links>Privacy Policy</Links> and <Links>Terms of Use</Links>.
          </Agreement>
          <Join onClick={handleClick} disabled={isFetching}>
            SIGN IN
          </Join>
        </Form>
        <Member>
          Not a member? &nbsp;
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Links>Join us</Links>
          </Link>
        </Member>
        <Link to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
          <Return>
            <KeyboardBackspaceIcon style={{ fontSize: "16 px" }} /> &nbsp;
            Return
          </Return>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
