import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { mobile } from "../responsive.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userLogout } from "../redux/apiCalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 60px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "20px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  padding-left: 5px;
  color: #474747;
  font-weight: 700;

  background-color: hsl(0, 0%, calc(100% - var(--lightness-offset, 0%)));
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: hsl(0, 0%, calc(100% - var(--lightness-offset, 0%)));
  cursor: text;
  ${mobile({ margin: 0, width: "100px", marginLeft: "10px" })}

  :hover {
    --lightness-offset: 10%;
  }

  :hover input {
    --lightness-offset: 10%;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })};
`;

const Icon = styled.div`
  ${mobile({ display: "none" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ display: "none" })};
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  user-select: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;

  ${mobile({ gap: "5px" })}
`;
const Popup = styled.div`
  /* visibility: hidden; */
  width: 250px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 10px 15px;
  position: absolute;
  z-index: 1;
  bottom: ${(props) => (props.type === "haveUser" ? "-880%" : "-520%")};
  left: -350%;
  margin-left: -80px;
  border: 1px solid lightgray;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: -1;
  opacity: 0;

  &::after {
    content: "";
    position: absolute;
    top: ${(props) => (props.type === "haveUser" ? "-7.5%" : "-14%")};
    left: 68.5%;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent lightgray transparent;
  }
`;

const PopupTitle = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  text-align: left;
  padding-left: 5px;
`;
const PopupItem = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  color: hsl(0, 0%, calc(60% - var(--lightness-offset, 0%)));
  background-color: hsl(0, 0%, calc(100% - var(--lightness-offset1, 0%)));
  width: 100%;
  text-align: left;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    --lightness-offset: 30%;
    --lightness-offset1: 5%;
  }
`;

const Item = styled.div`
  font-size: 24px;
  cursor: pointer;
  position: relative;
  user-select: none;

  :hover ${Popup} {
    opacity: ${(props) => (props.type === "account" ? "1" : "0")};
    z-index: ${(props) => (props.type === "account" ? "1" : "0")};

    transition: all 0.3s ease;
  }
`;

const Counter = styled.span`
  position: absolute;
  font-size: 12px;
  background-color: teal;
  width: 17px;
  height: 17px;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -3px;
  right: 15px;
`;

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogout(dispatch);
    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon
              style={{ cursor: "pointer", fontSize: "16px", color: "gray" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <Logo>
              BEBSTER&nbsp;
              <Icon>
                <LocalMallIcon />
              </Icon>
            </Logo>
          </Link>
        </Center>
        <Right>
          <Item type="account">
            <PersonOutlineOutlinedIcon />
            {user ? (
              <Popup type="haveUser">
                <PopupTitle>Account</PopupTitle>
                <PopupItem>Profile</PopupItem>
                <PopupItem>Orders</PopupItem>
                <PopupItem>Favourites</PopupItem>
                <PopupItem>Settings</PopupItem>
                <PopupItem onClick={handleLogOut}>Logout</PopupItem>
              </Popup>
            ) : (
              <Popup type="noUser">
                <PopupTitle>Welcome!</PopupTitle>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <PopupItem>Join us</PopupItem>
                </Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <PopupItem>Log In</PopupItem>
                </Link>
              </Popup>
            )}
          </Item>
          <Item>
            <FavoriteBorderOutlinedIcon />
          </Item>
          <Link to="/cart">
            <Item>
              <ShoppingBagOutlinedIcon style={{ marginRight: "20px" }} />
              <Counter>{cart.quantity}</Counter>
            </Item>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
