import { ResetPassword } from "../../components/pages/reset-password";

const ResetPasswordExample = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="w-96">
        <ResetPassword submit={(data) => console.log(data)} />
      </div>
    </div>
  );
};
export default ResetPasswordExample;
