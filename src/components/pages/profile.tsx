import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useUserFormContext } from "../../context/profile-context";

const Profile = () => {
  const form = useUserFormContext();
  return (
    <div className="space-y-3">
      <TextInput
        label="Name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />

      <TextInput
        label="Email"
        key={form.key("email")}
        {...form.getInputProps("email")}
      />

      <PasswordInput
        label="Password"
        key={form.key("password")}
        {...form.getInputProps("password")}
      />

      <Button type="submit">submit</Button>
    </div>
  );
};

export default Profile;
