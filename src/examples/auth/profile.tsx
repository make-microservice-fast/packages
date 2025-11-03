import { TextInput } from "@mantine/core";
import Profile from "../../components/pages/profile";
import { UserFormProvider, useUserForm } from "../../context/profile-context";

const ProfileExample = () => {
  const form = useUserForm({
    mode: "uncontrolled",
    initialValues: {
      name: "john",
      email: "john@initial.com",
      age: "18",
      password: "",
    },
  });
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <UserFormProvider form={form}>
        <form
          onSubmit={form.onSubmit((data) => {
            console.log(data);
          })}
          className="space-y-3 w-96 m-auto"
        >
          <TextInput
            label="Age"
            key={form.key("age")}
            {...form.getInputProps("age")}
          />

          <Profile />
        </form>
      </UserFormProvider>
    </div>
  );
};
export default ProfileExample;
