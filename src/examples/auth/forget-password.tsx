import { ForgotPassword } from "../../components/pages/forget-password";

const ForgetPasswordExample = () => {
  return (
    <div>
      <ForgotPassword submit={(data) => console.log(data)} />
    </div>
  );
};
export default ForgetPasswordExample;
