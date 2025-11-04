import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useUserProfileFormContext } from "../../context/profile-context";

export const Profile = () => {
  const form = useUserProfileFormContext();
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
