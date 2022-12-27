import { StyleCart } from "./styles";
import { useContext } from "react";
import { ButtonStyleRemove, ButtonStyle } from "../Buttons/styles";
import { CartContext } from "../../contexts/CartContext";
import { IoIosTrash } from "react-icons/io";
import { iProducts } from "../Products";

function Cart() {
  const { cart, setCart, removeItem, valorTotal, setCartModal } =
    useContext(CartContext);

  const counterCartSub = (object: iProducts) => {
    if (object.quantity === 1) {
      const dataFilter = cart.filter((elem) => elem.id !== object.id);
      setCart(dataFilter);
    } else {
      const data = cart.map((elem) => {
        if (object.id === elem.id) {
          elem.quantity!--;
        }
        return elem;
      });
      setCart(data);
    }
  };

  const counterCartSum = (object: iProducts) => {
    const data = cart.map((elem) => {
      if (object.id === elem.id) {
        elem.quantity!++;
      }
      return elem;
    });
    setCart(data);
  };

  return (
    <StyleCart>
      <div className="backgroundDark">
        <div className="divTitleCart">
          <p className="pTitleCart">Carrinho de compras</p>
          <p onClick={() => setCartModal(false)} className="closePModal">
            X
          </p>
        </div>
        <ul>
          {cart.length ? (
            cart?.map((item, index) => (
              <li key={index}>
                <div className="positionCardLi">
                  <div className="colorImg">
                    <img src={item.img} alt="Foto do lanche"></img>{" "}
                  </div>
                  <div>
                    {" "}
                    <div className="divPositionCard">
                      <p className="pLiName">{item.name}</p>
                      <ButtonStyleRemove
                        className="buttonRemoveToCart"
                        onClick={() => removeItem(index)}
                      >
                        <IoIosTrash />
                      </ButtonStyleRemove>
                    </div>
                    <div className="counter">
                      <button
                        className="sub"
                        onClick={() => counterCartSub(item)}
                      >
                        -
                      </button>
                      <p className="pnumberCounter">{item.quantity!}</p>
                      <button
                        className="sum"
                        onClick={() => counterCartSum(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="divEmpty">
              <p className="pEmpty">Sua sacola está vazia</p>
              <span className="spanEmpty">Adicione itens</span>
            </div>
          )}
        </ul>
        <div className="divCartDivision"></div>
        <div className="divPositionTotalValue">
          <p className="pTotal">Total</p>
          <p className="pValueCart">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(valorTotal)}
          </p>
        </div>
        <ButtonStyle onClick={() => setCart([])} className={"classButton"}>
          Remover todos
        </ButtonStyle>
      </div>
    </StyleCart>
  );
}

export default Cart;
