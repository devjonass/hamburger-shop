import { LoginStyle } from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import { ButtonStyle } from "../../components/Buttons/styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { iUserProviderLogin, UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchemaLogin } from "../../assets/validators/Schema";

export const Login = () => {
  const { handleForm } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserProviderLogin>({
    resolver: yupResolver(formSchemaLogin),
  });
  return (
    <LoginStyle>
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
      <form onSubmit={handleSubmit(handleForm)}>
        <h2>Login</h2>
        <div className="positionFormInput">
          <p className="erroMessage">{errors.email && errors.email.message}</p>
          <label>
            {" "}
            <span>Email</span>
            <input
              type="text"
              placeholder="Digite seu Nome"
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
        </div>
        <ButtonStyle type="submit">Logar</ButtonStyle>
        <p className="pFormCreate">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </p>

        <Link className="linkRegister" to="/register">
          <ButtonStyle className="buttonLink">Cadastrar</ButtonStyle>
        </Link>
      </form>
    </LoginStyle>
  );
};
