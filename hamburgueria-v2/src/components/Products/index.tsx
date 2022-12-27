import { useState, useEffect } from "react";
import { ListProducts } from "./styles";
import { useContext } from "react";
import { api } from "../../services/api";
import { CartContext } from "../../contexts/CartContext";
import { ButtonStyle } from "../Buttons/styles";

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity?: number;
}

function Products() {
  const {
    hamburguer,
    setCart,
    cart,
    filterCart,
    setHamburguer,
    hamburguerFilter,
    setcounterCart,
  } = useContext(CartContext);
  setcounterCart(cart.length);
  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("@token") || "");
      try {
        const { data } = await api.get<iProducts[]>("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setHamburguer(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const addCart = (object: iProducts) => {
    const productsNow = cart.find((elem) => object.id === elem.id);
    if (productsNow) {
      const data = cart.map((element) => {
        if (element.id === productsNow.id) {
          element.quantity!++;
        }
        return element;
      });
      setCart(data);
    } else {
      object.quantity = 1;
      setCart([...cart, object]);
    }
  };
  return (
    <ListProducts>
      <ul>
        {hamburguerFilter.length === 0 && filterCart.length !== 0 ? (
          <div className="divPositionResult">
            <p className="pResult">Resultado da pesquisa: {filterCart}</p>
            <p>Não há produtos com este nome</p>
          </div>
        ) : hamburguerFilter.length > 0 ? (
          hamburguerFilter.map(({ id, name, category, price, img }, index) => (
            <li key={id}>
              <div>
                <img src={img} alt="Foto do lanche"></img>
              </div>
              <p className="pLiName">{name}</p>
              <p className="pLiCategory">{category}</p>
              <p className="pLiValue">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(price)}
              </p>
              <ButtonStyle onClick={() => addCart(hamburguer[index])}>
                Adicionar
              </ButtonStyle>
            </li>
          ))
        ) : (
          hamburguer.map(({ id, name, category, price, img }, index, item) => (
            <li key={id}>
              <div>
                <img src={img} alt="Foto do lanche"></img>
              </div>
              <p className="pLiName">{name}</p>
              <p className="pLiCategory">{category}</p>
              <p className="pLiValue">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(price)}
              </p>
              <span>
                <ButtonStyle onClick={() => addCart(hamburguer[index])}>
                  Adicionar
                </ButtonStyle>
              </span>
            </li>
          ))
        )}
      </ul>
    </ListProducts>
  );
}

export default Products;
