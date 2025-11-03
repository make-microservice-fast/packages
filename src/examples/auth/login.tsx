import { useNavigate } from "react-router";
import { Login, type LoginFormProps } from "../../components/pages/login";
import { authClient } from "../lib/auth-client";

const LoginExample = () => {
  const navigate = useNavigate();
  const login = (value: LoginFormProps) => {
    authClient.signIn
      .email(value)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Login
      image="https://cdn.pixabay.com/photo/2025/09/29/11/48/feather-9862263_960_720.jpg"
      onLogin={login}
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      register_url="/packages/register"
    />
  );
};
export default LoginExample;
