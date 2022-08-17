import { publicRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })};
`;

const Products = ({ title, category, filters, sort, limit }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(category);

  useEffect(() => {
    const endPoint =
      category !== "all" ? `product?categoryID=${category}` : "product";
    console.log("get");
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(endPoint);
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    console.log("filter");
    filters &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          })
        )
      );
  }, [products, filters, category]);

  useEffect(() => {
    console.log("sort");
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        return [...prev].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      });
    } else if (sort === "asc") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.price - b.price);
      });
    } else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);

  return (
    <Container>
      <Title>{title}</Title>
      <ProductContainer>
        {filteredProducts.length !== 0
          ? filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          : products.slice(limit ? (0, limit) : 0).map((product) => {
              return <Product key={product.id} product={product} />;
            })}
      </ProductContainer>
    </Container>
  );
};

export default Products;
