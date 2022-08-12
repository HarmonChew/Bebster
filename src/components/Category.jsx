import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 15px;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  ${mobile({ height: "30vh" })}
`;

const ImgContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 5px;

  ${mobile({ height: "30vh" })}
`;

const Img = styled.img`
  width: 100%;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;
const Name = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Category = ({ item }) => {
  return (
    <Container>
      <Link
        to={`/products/${item.cat}`}
        style={{ textDecoration: "none", color: "black", textAlign: "center" }}
      >
        <ImgContainer>
          <Img src={item.img} />
        </ImgContainer>
        <Name>{item.name}</Name>
      </Link>
    </Container>
  );
};

export default Category;
