import { toast } from "react-toastify";

export const notifySucess = () => {
  toast.success("Usuário Cadastrado com Sucesso!", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const notifyError = () => {
  toast.error("Algo deu errado com seu Cadastro :(", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const notifySucessLogin = () => {
  toast.success("Usuário Logado com Sucesso!", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const notifyErrorLogin = () => {
  toast.error("Algo deu errado com seu Login :(", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
