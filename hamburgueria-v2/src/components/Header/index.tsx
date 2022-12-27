import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ButtonStyle } from "../Buttons/styles";
import { HeaderStyle } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function HeaderTop() {
  const navigate = useNavigate();
  const {
    hamburguer,
    setHamburguerFilter,
    setFilterCart,
    search,
    setSearch,
    setCartModal,
    counterCart,
  } = useContext(CartContext);
  function filterFood(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterCart(event.target.value);
    const filter = hamburguer.filter((elem) =>
      elem.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setHamburguerFilter(filter);
  }

  const loggout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <HeaderStyle>
      {search === false ? (
        <div className="positionAll">
          <div className="positionAllIcon">
            <div className="divPositionTitle">
              <p className="pHeader">
                Burguer <span>Kenzie</span>
              </p>
            </div>
            <div className="positionInputButton">
              <div className="iconStyle">
                <AiOutlineSearch
                  className="cursor"
                  onClick={() => setSearch(true)}
                />
                <div className="positionIconCounter">
                  <HiOutlineShoppingCart
                    onClick={() => setCartModal(true)}
                    className="iconStyleCart cursor"
                  />
                  <p className="pCounterCart">{counterCart}</p>
                </div>
                <ImExit
                  onClick={() => loggout()}
                  className="iconStyleExit cursor"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relativeDiv">
          <input
            onChange={(event) => filterFood(event)}
            placeholder="Digitar Pesquisa"
          ></input>
          <ButtonStyle className="buttonComp">
            <AiOutlineSearch className="iconSearch" />
          </ButtonStyle>
          <p className="closeSearch" onClick={() => setSearch(false)}>
            X
          </p>
        </div>
      )}
    </HeaderStyle>
  );
}

export default HeaderTop;
