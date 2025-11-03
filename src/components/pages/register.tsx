import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  Progress,
  TextInput,
} from "@mantine/core";
import { matchesField, useForm } from "@mantine/form";
import { useState } from "react";
import { getStrength, requirements } from "../../utils/password";
import { PasswordRequirement } from "../ui/password-requirement";
export interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
}

export interface RegisterProps {
  onSignUp: (v: RegisterFormProps) => void;
  initialValues: RegisterFormProps;
  login_url?: string;
}
export const Register = ({
  initialValues,
  onSignUp,
  login_url,
}: RegisterProps) => {
  const [hidePasswordTips, setHidePasswordTips] = useState(true);
  const form = useForm({
    initialValues: {
      ...initialValues,
      confirmPassword: "",
    },
    validate: {
      email: (value) => {
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email";
        return null;
      },
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      confirmPassword: matchesField("password", "Passwords are not the same"),
    },
  });
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(form.values.password)}
    />
  ));
  const strength = getStrength(form.values.password);

  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: "0ms" } }}
        value={
          form.values.password.length > 0 && index === 0
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
    <div className="w-full m -auto">
      <Paper>
        <form onSubmit={form.onSubmit(onSignUp)} className="space-y-3">
          <TextInput
            label="Name"
            placeholder="Name"
            name="name"
            error={form.errors.name}
            onChange={(e) => form.setFieldValue("name", e.currentTarget.value)}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            name="email"
            error={form.errors.email}
            onChange={(e) => form.setFieldValue("email", e.currentTarget.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={form.values.password}
            onChange={(e) =>
              form.setFieldValue("password", e.currentTarget.value)
            }
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
            value={form.values.confirmPassword}
            onChange={(e) =>
              form.setFieldValue("confirmPassword", e.currentTarget.value)
            }
            error={form.errors.confirmPassword}
          />

          <Group justify="space-between" mt="xl">
            <Anchor href={login_url ?? "/login"} size="xs" c="dimmed">
              Already have an account? Login
            </Anchor>
            <Button type="submit" radius="xl">
              Register
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
};
