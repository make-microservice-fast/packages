import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  Progress,
  TextInput,
} from "@mantine/core";
import { useState, type FC, type PropsWithChildren } from "react";
import { useRegisterFormContext } from "../../context/register-context";
import { getStrength, requirements } from "../../utils/password";
import { PasswordRequirement } from "../ui/password-requirement";

export const DynamicRegister: FC<PropsWithChildren> = ({ children }) => {
  const [hidePasswordTips, setHidePasswordTips] = useState(true);

  const form = useRegisterFormContext();

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(form.key("password"))}
    />
  ));
  const strength = getStrength(form.key("password"));

  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: "0ms" } }}
        value={
          form.key("password").length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / 4) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"}
        key={index}
        size={4}
      />
    ));

  return (
    <div>
      <Paper>
        <TextInput
          label="Name"
          error={form.errors.name}
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          error={form.errors.email}
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          key={form.key("password")}
          {...form.getInputProps("password")}
          onFocusCapture={() => setHidePasswordTips(false)}
          onBlur={() => setHidePasswordTips(true)}
        />
        <Group gap={5} grow mt="xs" mb="md">
          {bars}
        </Group>

        {!hidePasswordTips && checks}
        <PasswordInput
          label="Confirm Password"
          placeholder="confirmPassword"
          key={form.key("confirmedPassword")}
          {...form.getInputProps("confirmedPassword")}
          error={form.errors.confirmPassword}
        />
        {children}
        <Group justify="space-between" mt="xl">
          <Anchor href={"login"} size="xs" c="dimmed">
            Already have an account? Login
          </Anchor>
          <Button type="submit" radius="xl">
            Register
          </Button>
        </Group>
      </Paper>
    </div>
  );
};
