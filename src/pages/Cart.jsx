import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { adminRequest } from "../requestMethods";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { clearCart, removeProduct } from "../redux/cartRedux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 80vw;
  align-self: center;

  ${mobile({ width: "100%" })}
`;

const Title = styled.h1`
  margin: 30px 0px;
  font-size: 28px;
`;

const Bag = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20vh;

  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const OrderItem = styled.div`
  width: ${(props) => (props.type === "bag" ? "100%" : "600px")};
  display: flex;
  gap: 30px;
  padding: 30px;
  border-bottom: 1px solid lightgray;
  color: #6b797d;

  ${mobile({ padding: "10px 15px 10px 0", width: "100%", gap: "10px" })}

  position: relative;
`;

const OptionsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  right: 5px;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const ImgContainer = styled.div``;
const ProductImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
`;
const InfoContainer = styled.div``;
const ProductName = styled.h3`
  margin-bottom: 15px;
  color: black;
  cursor: pointer;
`;
const Color = styled.p`
  margin-bottom: 5px;
`;
const Edit = styled.div`
  display: inline;
  margin-right: 15px;
`;
const EditText = styled.span`
  margin-right: 5px;
`;
const Select = styled.select`
  border: none;
  background: transparent;
  font-size: 16px;
  color: #6b797d;
`;
const Option = styled.option``;

const Price = styled.div`
  margin-top: 10px;
`;

const SubTotal = styled.div`
  position: absolute;
  right: 5px;
  font-weight: 600;
  bottom: 15px;
`;

const SubTotalText = styled.span`
  font-weight: 500;
  font-size: 14px;
  margin-right: 5px;
`;

const SubTotalAmount = styled.span``;

const Right = styled.div`
  flex: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-weight: 500;
  border-top: ${(props) =>
    props.type === "total" ? "1px solid lightgray" : "none"};
`;

const Item = styled.span``;

const ItemValue = styled.span``;

const Button1 = styled.button`
  height: 50px;
  padding: 0 30px;
  background: hsl(0, 0%, calc(var(--lightness-offset, 0%) + 0%));
  color: white;
  border: none;
  border-radius: 25px;
  margin-top: 30px;
  font-weight: 700;
  width: 100%;
  cursor: pointer;

  :hover {
    --lightness-offset: 25%;
  }
`;

const Button2 = styled.button`
  width: 100%;
  height: 50px;
  padding: 0 30px;
  background: #e0e0e0;
  color: hsl(0, 8%, 26%);
  border: none;
  border-radius: 25px;
  margin-top: 30px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid transparent;

  :hover {
    border: 1px solid hsl(0, 8%, 26%);
    background: #e9e8e8;
  }
`;

const Favourites = styled.div`
  margin-bottom: 100px;

  ${mobile({ width: "100%" })}
`;

const GoTo = styled.div`
  margin-top: 20px;
`;

const Url = styled.span`
  color: #6dd5f7;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const KEY =
    "pk_test_51LRtILIsFnWb3cfkcTJm9rfzDB98BAxbKUeEBSzTc2JX9iNNVLwnkQ63780NGrH934AijNVUPRzhONmWYc7TaRbc003phpQC8C";

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleDelete = (product) => {
    dispatch(removeProduct(product));
  };
  console.log(cart.products);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await adminRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: Math.floor(cart.totalPrice * 100),
        });
        dispatch(clearCart());
        navigate("/success", { state: { data: res.data } });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.totalPrice, navigate, dispatch]);

  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Title>Bag</Title>
        <Bag>
          <Left>
            {cart.products.map((product) => {
              return (
                <OrderItem type="bag">
                  <OptionsContainer>
                    <Icon
                      onClick={() =>
                        handleDelete({
                          id: product._id,
                          quantity: product.quantity,
                          price: product.price,
                        })
                      }
                    >
                      <DeleteOutlineIcon />
                    </Icon>
                    <Icon>
                      <FavoriteBorderIcon />
                    </Icon>
                  </OptionsContainer>
                  <ImgContainer>
                    <ProductImage src={product.image} />
                  </ImgContainer>
                  <InfoContainer>
                    <ProductName>{product.name}</ProductName>
                    <Color>{product.color}</Color>

                    <Edit>
                      <EditText>Quantity</EditText>
                      <Select>
                        {quantityArray.map((quantity) => {
                          return quantity === product.quantity ? (
                            <Option selected>{quantity}</Option>
                          ) : (
                            <Option>{quantity}</Option>
                          );
                        })}
                      </Select>
                    </Edit>
                    <Edit>
                      <EditText>Size</EditText>
                      <Select>
                        {product.sizes.map((size) => {
                          return size === product.size ? (
                            <Option selected>{size}</Option>
                          ) : (
                            <Option>{size}</Option>
                          );
                        })}
                      </Select>
                    </Edit>
                    <Price>${product.price}</Price>

                    <SubTotal>
                      <SubTotalText>Subtotal: </SubTotalText>
                      <SubTotalAmount>
                        ${(product.price * product.quantity).toFixed(2)}
                      </SubTotalAmount>
                    </SubTotal>
                  </InfoContainer>
                </OrderItem>
              );
            })}
          </Left>
          <Right>
            <Title>Summary</Title>
            <Line type="normal">
              <Item>Item Subtotal(s)</Item>
              <ItemValue>${cart.totalPrice.toFixed(2)}</ItemValue>
            </Line>
            {cart.products.length !== 0 ? (
              <Line type="normal">
                <Item>Estimated Shipping and Delivery</Item>
                <ItemValue>
                  <strike>$4.99</strike> &nbsp;$0.00
                </ItemValue>
              </Line>
            ) : (
              ""
            )}
            <Line type="total">
              <Item>Order Total</Item>
              <ItemValue>${cart.totalPrice.toFixed(2)}</ItemValue>
            </Line>
            <StripeCheckout
              name="Bebster"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.totalPrice.toFixed(2)}`}
              amount={cart.totalPrice * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button1>CHECKOUT</Button1>
            </StripeCheckout>
            <Link to="/products" style={{ width: "100%" }}>
              <Button2>CONTINUE SHOPPING</Button2>
            </Link>
          </Right>
        </Bag>
        <Favourites>
          <Title>Favourites</Title>

          <OrderItem type="favourite">
            <OptionsContainer>
              <Icon>
                <DeleteOutlineIcon />
              </Icon>
              <Icon>
                <FavoriteBorderIcon />
              </Icon>
            </OptionsContainer>
            <ImgContainer>
              <ProductImage src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448348/sub/goods_448348_sub13.jpg?width=1600&impolicy=quality_75" />
            </ImgContainer>
            <InfoContainer>
              <ProductName>Linen Cotton Tapered Pants</ProductName>
              <Color>Light Blue</Color>
              <Price>$39.90</Price>
              <Button2>Add to Bag</Button2>
            </InfoContainer>
          </OrderItem>
          <GoTo>
            Go to <Url>Favourites</Url>
          </GoTo>
        </Favourites>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
