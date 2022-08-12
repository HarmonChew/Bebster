import styled from "styled-components";
import { mobile } from "../responsive";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";

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
  flex-direction: column;
  align-content: center;
  justify-content: center;

  width: 40%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;

  ${mobile({ width: "88%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
  align-self: center;

  ${mobile({ textAlign: "center" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  width: 80%;
  background: transparent;
  border: 1.5px solid #838383;
  padding: 10px;
  border-radius: 5px;

  :hover {
    border: 1.5px solid #292929;
  }

  :focus {
    outline: none;
    border: 1.5px solid #292929;
  }
`;
const Agreement = styled.div`
  width: 80%;
  align-self: center;
  text-align: center;
  margin-bottom: 30px;
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

  :hover {
    --lightness-offset: 25%;
  }
`;

const Member = styled.span`
  align-self: center;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Return = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 14px;
  color: #4b4bb3;
  cursor: pointer;
`;

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    let data = {};
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const registerNewUser = async (data) => {
      try {
        const res = await publicRequest.post("auth/register", data);
        navigate("/login");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    registerNewUser(data);
  };

  return (
    <Container>
      <Wrapper>
        <Title>BECOME A BEBSTER MEMBER</Title>
        <Form autoComplete="off" onSubmit={handleRegister}>
          <Input
            placeholder="Email address"
            type="email"
            required
            name="email"
          ></Input>
          <Input
            placeholder="Password"
            type="password"
            required
            name="password"
          ></Input>
          <Input
            placeholder="First Name"
            type="text"
            required
            name="firstName"
          ></Input>
          <Input
            placeholder="Last Name"
            type="text"
            required
            name="lastName"
          ></Input>
          <Input
            placeholder="Date of Birth"
            type="date"
            required
            name="dateOfBirth"
          ></Input>
          <Agreement>
            By creating an account, you agree to Bebster's &nbsp;
            <Links>Privacy Policy</Links> and <Links>Terms of Use</Links>.
          </Agreement>
          <Join>JOIN US</Join>
        </Form>
        <Member>
          Already a member? &nbsp;
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Links>Sign In</Links>
          </Link>
        </Member>
        <Links to="/" style={{ textDecoration: "none", alignSelf: "center" }}>
          <Return>
            <KeyboardBackspaceIcon style={{ fontSize: "16 px" }} /> &nbsp;
            Return
          </Return>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Register;
