import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  margin: 50px;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
  })}
`;

const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ width: "88%" })}
`;

const Img = styled.img`
  height: 80%;
  width: 80%;
  object-fit: scale-down;
  ${mobile({ width: "100%" })}
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mobile({ width: "100%", textAlign: "center" })}
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 50px;
`;

const Description = styled.p`
  line-height: 30px;
  letter-spacing: 1.5px;
  margin-bottom: 70px;
`;

const SelectionContainer = styled.div`
  display: flex;
  gap: 40px;

  ${mobile({ alignSelf: "center", gap: "30px" })}
`;

const Selection = styled.div`
  margin-bottom: 50px;
`;

const SelectionText = styled.span`
  margin-right: 30px;
  font-size: 16px;

  ${mobile({ marginRight: "10px" })}
`;

const Select = styled.select`
  font-size: 16px;
  padding: 5px 10px;
  text-align: center;
  background: white;
  border: 0.5px solid gray;
  cursor: pointer;
`;

const Option = styled.option``;

const Price = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 50px;
  display: flex;
  gap: 30px;
  ${mobile({ alignSelf: "center" })}
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const QuantityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    transform: translateY(-1.5px);
  }
`;
const QuantityNumber = styled.span`
  font-weight: 300;
  font-size: 20px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  border-radius: 50%;
  cursor: text;
`;

const Buttons = styled.div`
  display: flex;
  gap: 30px;

  ${mobile({ gap: "15px" })}
`;

const Cart = styled.button`
  width: max-content;
  padding: 20px 50px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 35px;
  border: none;
  color: white;
  background: hsl(0, 0%, calc(var(--lightness-offset, 0%) + 0%));
  cursor: pointer;

  :hover {
    --lightness-offset: 50%;
  }
`;

const Favorite = styled.button`
  width: max-content;
  padding: 20px 40px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 35px;
  border: none;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  :hover {
    border: 1px solid black;
  }
`;

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const user = useSelector((state) => state.user.currentUser);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!user) {
      toast.warn("You have to be logged in to add to cart!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!size) {
      toast.warn("Please select a size!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!color) {
      toast.warn("Please select a color!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    toast.success("Added to cart!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("product/find/" + id);
        setProduct({ ...res.data, price: res.data.price.toFixed(2) });
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src={product.image}></Img>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <SelectionContainer>
            <Selection onChange={(e) => setSize(e.target.value)}>
              <SelectionText>Size: </SelectionText>
              <Select>
                <Option selected disabled>
                  --
                </Option>
                {product.sizes
                  ? product.sizes.map((size) => {
                      return <Option key={size}>{size}</Option>;
                    })
                  : null}
              </Select>
            </Selection>
            <Selection>
              <SelectionText>Color: </SelectionText>
              <Select onChange={(e) => setColor(e.target.value)}>
                <Option selected disabled>
                  --
                </Option>
                {product.colors
                  ? product.colors.map((color) => {
                      return <Option key={color}>{color}</Option>;
                    })
                  : null}
              </Select>
            </Selection>
          </SelectionContainer>
          <Price>
            ${product.price}
            <Quantity>
              <QuantityButton
                onClick={(e) => {
                  if (quantity === 1) return;
                  else {
                    setQuantity((prev) => prev - 1);
                  }
                }}
              >
                <RemoveIcon />
              </QuantityButton>
              <QuantityNumber>{quantity}</QuantityNumber>
              <QuantityButton
                onClick={(e) => {
                  if (quantity === 9) return;
                  else setQuantity((prev) => prev + 1);
                }}
              >
                <AddIcon />
              </QuantityButton>
            </Quantity>
          </Price>
          <Buttons>
            <Cart onClick={handleClick}>Add to Cart</Cart>
            <Favorite>
              Add to Favorites
              <FavoriteBorderIcon />
            </Favorite>
          </Buttons>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
