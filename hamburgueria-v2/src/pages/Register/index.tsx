import { RegisterStyle } from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import { ButtonStyle } from "../../components/Buttons/styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { formSchema } from "../../assets/validators/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { iUserProviderRegister } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export const Register = () => {
  const { onSubmitFunction } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserProviderRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <RegisterStyle>
      <div className="display">
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <div className="boxLogin">
          <div className="boxIcon">
            <FiShoppingBag className="icon" />
          </div>
          <div>
            <p className="pBox">
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <span>melhores</span> ingredientes.
            </p>
          </div>
        </div>
        <div className="imgDisplay"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <header>
          <h2>Cadastro</h2>
          <Link to="/">
            <p className="pRegisterHeader">Retornar para o login</p>
          </Link>
        </header>
        <div className="positionFormInput">
          <p className="erroMessage">{errors.name && errors.name.message}</p>
          <label>
            {" "}
            <span>Nome</span>
            <input
              type="text"
              placeholder="Digite seu Nome"
              {...register("name")}
            />
          </label>
          <p className="erroMessage">{errors.email && errors.email.message}</p>
          <label>
            {" "}
            <span>Email</span>
            <input
              type="email"
              placeholder="Digite seu Email"
              {...register("email")}
            />
          </label>
          <p className="erroMessage">
            {errors.password && errors.password.message}
          </p>
          <label>
            {" "}
            <span>Senha</span>
            <input
              type="password"
              placeholder="Digite sua Senha"
              {...register("password")}
            ></input>
          </label>
          <p className="erroMessage">
            {errors.confirmPassword && errors.confirmPassword.message}
          </p>
          <label>
            {" "}
            <span>Confirmar senha</span>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            ></input>
          </label>
        </div>
        <ButtonStyle type="submit" className="buttonRegister">
          Cadastrar
        </ButtonStyle>
      </form>
    </RegisterStyle>
  );
};
