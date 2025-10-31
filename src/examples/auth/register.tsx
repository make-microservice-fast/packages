import Register, {
  type RegisterFormProps,
} from "../../components/pages/register";
import { authClient } from "../lib/auth-client";

const RegisterExample = () => {
  const signup = (v: RegisterFormProps) => {
    authClient.signUp.email(v);
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
