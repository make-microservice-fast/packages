import { useNavigate } from "react-router";
import {
  Register,
  type RegisterFormProps,
} from "../../components/pages/register";
import { authClient } from "../lib/auth-client";

const RegisterExample = () => {
  const navigate = useNavigate();
  const signup = (v: RegisterFormProps) => {
    authClient.signUp
      .email(v)
      .then((res) => {
        if (res.error?.status) {
          console.log(res.error.message);
        } else {
          console.log("register");
          navigate("login")
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="w-96">
        <Register
          initialValues={{
            email: "",
            name: "",
            password: "",
          }}
          onSignUp={signup}
        />
      </div>
    </div>
  );
};
export default RegisterExample;
