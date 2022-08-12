import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 15px;
  ${mobile({ padding: 0 })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
  cursor: pointer;

  ${mobile({ marginTop: "20px" })};
`;

const CategoryContainer = styled.div`
  display: flex;
  ${mobile({ padding: 0, flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      <Title>Categories</Title>
      <CategoryContainer>
        {categories.map((category) => {
          return <Category key={category.id} item={category} />;
        })}
      </CategoryContainer>
    </Container>
  );
};

export default Categories;
