import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft } from "@tabler/icons-react";

export interface ForgetPasswordProps {
  submit: (data: { email: string }) => void;
}

export function ForgotPassword({ submit }: ForgetPasswordProps) {
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => {
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email";
        return null;
      },
    },
  });
  return (
    <Container size={460} my={30}>
      <Title className="text-2xl font-medium " ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={form.onSubmit(submit)}>
          <TextInput
            label="Your email"
            placeholder="me@mantine.dev"
            required
            onChange={(e) => form.setFieldValue("email", e.currentTarget.value)}
            error={form.errors.email}
          />
          <Group justify="space-between" mt="lg" className="">
            <Anchor c="dimmed" size="sm" href="login">
              <Center inline>
                <IconArrowLeft size={12} stroke={1.5} />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
            <Button className="" type="submit">
              Reset password
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
