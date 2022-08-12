import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  height: 400px;

  flex-direction: column;
`;

const Main = styled.div`
  display: flex;

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  ${mobile({ alignItems: "center" })}
`;

const Logo = styled.h1`
  margin-bottom: 20px;
`;
const Description = styled.p`
  margin-bottom: 20px;
  width: 90%;
  margin-left: 0;

  ${mobile({ textAlign: "center" })}
`;
const Socials = styled.div`
  display: flex;
  gap: 30px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Middle = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;

  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: max-content;
  margin: 0;
  margin-bottom: 10px;
  cursor: pointer;
  color: #0066ff;
  border-bottom: 1px solid #0066ff;

  &:hover {
    border-bottom: 1px solid transparent;
  }
`;

const Copy = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin: 20px 0;
  padding: 20px;
  ${mobile({ alignSelf: "center" })};
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "flex", flexDirection: "column", alignItems: "center" })}
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  ${mobile({ flexDirection: "column", alignItems: "center" })}
`;

const PaymentOptions = styled.img`
  margin-top: 20px;
  width: 150px;
`;

const Footer = () => {
  return (
    <Container>
      <Main>
        <Left>
          <Logo>BEBSTER</Logo>

          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse voluptatem laboriosam ducimus pariatur, natus dolorum
            recusandae laborum rem veniam!
          </Description>
          <Socials>
            <SocialIcon color="4267B2">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="bc2a8d">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="1DA1F2">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </Socials>
        </Left>
        <Middle>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About us</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Order Status</ListItem>
            <ListItem>Returns</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms and Conditions</ListItem>
          </List>
        </Middle>
        <Right>
          <Title>Contact</Title>
          <Contact>
            <PlaceIcon />1 Apple Road
          </Contact>
          <Contact>
            <PhoneIcon />
            +65 9876 5432
          </Contact>
          <Contact>
            <EmailIcon />
            contact@bebster.com
          </Contact>

          <PaymentOptions
            src="https://www.transparentpng.com/thumb/payment-method/aN9nfk-payment-method-background.png"
            alt="Payment Method Background @transparentpng.com"
          />
        </Right>
      </Main>
      <Copy>&copy; All Rights Reserved Bebster Co. 2022</Copy>
    </Container>
  );
};

export default Footer;
