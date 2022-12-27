import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import Cart from "../../components/Cart";
import HeaderTop from "../../components/Header";
import { HomeStyle } from "./styles";
import Products from "../../components/Products";

export const Dashboard = () => {
  const { cartModal } = useContext(CartContext);

  return (
    <HomeStyle>
      <HeaderTop />
      <Products />
      {cartModal === true ? <Cart /> : ""}
    </HomeStyle>
  );
};
