import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Name = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin-top: 20px;
`;

const Img = styled.img`
  height: 80%;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  background-color: white;

  :hover ${Info} {
    transition: all 0.3s ease;
    opacity: 1;
  }

  :hover ${Img} {
    transition: all 0.3s ease;
    opacity: 0.3;
  }
  :hover ${Name} {
    transition: all 0.3s ease;
    opacity: 0.3;
  }
`;

const Icon = styled.div`
  font-size: 50px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background-color: #dedede;

  :hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      style={{
        textDecoration: "none",
        flex: 1,
        color: "black",
      }}
    >
      <Container>
        <Img src={product.image} />
        <Name>{product.name}</Name>
        <Info>
          <Icon>
            <SearchIcon />
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
          <Icon>
            <ShoppingBagOutlinedIcon />
          </Icon>
        </Info>
      </Container>
    </Link>
  );
};

export default Product;
