import { createContext, Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { iProducts } from "../../components/Products";

export const CartContext = createContext<iCartProviderContexts>({} as iCartProviderContexts);
interface iCartProviderProps{
    children: React.ReactNode;
}
interface iCartProviderContexts{
  hamburguer:iProducts [];
  setCart: Dispatch<SetStateAction<iProducts []>>;
  cart: iProducts [];
  filterCart: string ;
  setHamburguer:Dispatch<SetStateAction<iProducts []>>;
  search:boolean
  counterCart: number
  setcounterCart:Dispatch<SetStateAction<number>>
  setSearch:Dispatch<SetStateAction<boolean>>
  hamburguerFilter:iProducts [];
  removeItem:(indice:number)=> void;
  valorTotal: number;
  setHamburguerFilter:Dispatch<SetStateAction<iProducts []>>;
  setFilterCart:Dispatch<SetStateAction<string>>;
  cartModal:boolean
   setCartModal: Dispatch<SetStateAction<boolean>>
   counterAddCart:number 
   setcounterAddCart:Dispatch<SetStateAction<number>>
}

export const CartProvider = ({ children}: iCartProviderProps) => {
  const [search, setSearch] = useState(false)
  const [counterCart, setcounterCart] = useState(0)
  const [cartModal, setCartModal] = useState(false)
  const [hamburguer, setHamburguer] = useState<iProducts []>([])
  const [hamburguerFilter, setHamburguerFilter] = useState <iProducts []>([])
  const [filterCart, setFilterCart] = useState<string>("")
  const [cart, setCart] = useState<iProducts []>([])
  const [counterAddCart, setcounterAddCart] = useState(0)
    function removeItem(indice:number){
        const removeFilter = cart.filter((elem, index) => {
            return indice !== index
        });
        setCart(removeFilter);
      }
  
      const valorTotal = cart.reduce((valorAnterior, valorAtual) => {
        return valorAtual.price *  +valorAtual.quantity! + valorAnterior;
      }, 0);
      
  return <CartContext.Provider value={{cart, setCart, removeItem, valorTotal, hamburguer, setHamburguer, hamburguerFilter, setHamburguerFilter, filterCart, setFilterCart,search, setSearch, cartModal, setCartModal, counterCart, setcounterCart, counterAddCart, setcounterAddCart}}>
    {children}
    </CartContext.Provider>;
    
};