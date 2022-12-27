import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import {
  notifyError,
  notifyErrorLogin,
  notifySucess,
  notifySucessLogin,
} from "../../Toastfy";

interface iUserContext {
  onSubmitFunction: (body: iUserProviderRegister) => void;
  handleForm: (body: iUserProviderLogin) => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: any;
  setUser: any;
}
export const UserContext = createContext<iUserContext>({} as iUserContext);
interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUserProviderRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  onSubmitFunction: (body: iUserProviderRegister) => void;
}
export interface iUserProviderLogin {
  email: string;
  password: string;
  handleForm: (body: iUserProviderLogin) => void;
}

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onSubmitFunction = async (body: iUserProviderRegister) => {
    try {
      const { data } = await api.post("/users", body);
      notifySucess();
      navigate("/");
    } catch (err) {
      console.log(err);
      notifyError();
    }
  };

  const handleForm = async (body: iUserProviderLogin) => {
    try {
      const response = await api.post("/login", body);

      window.localStorage.clear();
      window.localStorage.setItem(
        "@token",
        JSON.stringify(response.data.accessToken)
      );
      notifySucessLogin();
      setLoading(true);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      notifyErrorLogin();
    }
  };

  useEffect(() => {
    async function loadUser() {
      const token = JSON.parse(localStorage.getItem("@token")!);

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [navigate]);
  return (
    <UserContext.Provider
      value={{
        onSubmitFunction,
        handleForm,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
