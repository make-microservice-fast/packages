import { Button, Group, PasswordInput, Progress } from "@mantine/core";
import { matchesField, useForm } from "@mantine/form";
import { useState } from "react";
import { getStrength, requirements } from "../../utils/password";
import { PasswordRequirement } from "../ui/password-requirement";
export interface ResetPasswordProps {
  submit: (data: { password: string }) => void;
}
export const ResetPassword = ({ submit }: ResetPasswordProps) => {
  const [hidePasswordTips, setHidePasswordTips] = useState(true);

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: {
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
    <>
      <form
        onSubmit={form.onSubmit(submit)}
        className="space-y-3"
        autoComplete="off"
      >
        <PasswordInput
          label="Password"
          placeholder="Password"
          value={form.values.password}
          onChange={(e) =>
            form.setFieldValue("password", e.currentTarget.value)
          }
          onFocusCapture={() => setHidePasswordTips(false)}
          onBlur={() => setHidePasswordTips(true)}
          autoComplete="off"
        />
        <Group gap={5} grow mt="xs" mb="md">
          {bars}
        </Group>

        {!hidePasswordTips && checks}
        <PasswordInput
          label="Confirm Password"
          placeholder="confirmPassword"
          value={form.values.confirmPassword}
          autoComplete="off"
          onChange={(e) =>
            form.setFieldValue("confirmPassword", e.currentTarget.value)
          }
          error={form.errors.confirmPassword}
        />

        <Button type="submit" radius="xl">
          Submit
        </Button>
      </form>
    </>
  );
};
