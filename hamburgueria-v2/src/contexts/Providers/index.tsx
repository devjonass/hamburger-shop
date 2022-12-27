import { CartProvider } from "../CartContext";
import { UserProvider } from "../UserContext";

interface iProviderProps{
    children: React.ReactNode;
}
export const Providers = ({children}:iProviderProps ) => {
  return (
    
  <UserProvider>
   <CartProvider>
      {children}
      </CartProvider>
      </UserProvider>
  );
};