import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 30px 45px;

  ${mobile({ textAlign: "center" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px 45px;
`;

const FilterType = styled.span`
  margin-right: 20px;
  font-size: 20px;
`;

const Select = styled.select`
  margin-right: 20px;
  height: 40px;
  width: 100px;
  text-align: center;
  background: white;
  border: 0.5px solid gray;

  ${mobile({
    height: "40px",
    width: "90%",
    marginTop: "10px",
  })};
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const categoryTitle = category ? category.toUpperCase() : "";

  const handleFilters = (e) => {
    const value = e.target.value;

    if (value === "null") {
      const newFilters = delete filters[e.target.name];
      setFilters(newFilters);
    } else {
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    }
  };

  return (
    <Container>
      <Announcements />
      <Navbar />
      <Title>{categoryTitle}</Title>
      <FilterContainer>
        <Filter>
          <FilterType>Filter Products:</FilterType>
          <Select onChange={handleFilters} name="colors">
            <Option value={"null"}>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select onChange={handleFilters} name="sizes">
            <Option selected value={"null"}>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterType>Sort Items: </FilterType>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
