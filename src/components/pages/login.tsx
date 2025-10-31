import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { GoogleButton } from "../ui/google-button";
import { TwitterButton } from "../ui/twitter-button";

export interface LoginFormProps {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface LoginProps {
  image?: string;
  initialValues: LoginFormProps;
  onLogin: (values: LoginFormProps) => void;
  googleLogin?: () => void;
  twitterLogin?: () => void;
  register_url?: string;
}

const Login = ({
  image,
  onLogin,
  googleLogin,
  twitterLogin,
  initialValues,
  register_url,
}: LoginProps) => {
  const form = useForm({
    initialValues,
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
    },
  });
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 min-h-screen flex justify-center items-center">
        <Paper className="w-full max-w-md p-3.5">
          {(twitterLogin || googleLogin) && (
            <>
              <Group grow mb="md" mt="md">
                {googleLogin && (
                  <GoogleButton radius="xl" onClick={googleLogin}>
                    Google
                  </GoogleButton>
                )}
                {twitterLogin && (
                  <TwitterButton radius="xl" onClick={twitterLogin}>
                    Twitter
                  </TwitterButton>
                )}
              </Group>
              <Divider
                label="Or continue with email"
                labelPosition="center"
                my="lg"
              />
            </>
          )}

          <form onSubmit={form.onSubmit(onLogin)} className="space-y-3">
            <TextInput
              label="Email"
              placeholder="Email"
              value={form.values.email}
              error={form.errors.email}
              onChange={(e) =>
                form.setFieldValue("email", e.currentTarget.value)
              }
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              value={form.values.password}
              error={form.errors.password}
              onChange={(e) =>
                form.setFieldValue("password", e.currentTarget.value)
              }
            />
            <Checkbox
              label="keep me logged in"
              checked={form.values.rememberMe}
              onChange={(e) =>
                form.setFieldValue("rememberMe", e.currentTarget.checked)
              }
            />
            <Group justify="space-between" mt="xl">
              <Anchor href={register_url ?? "/register"} size="xs" c="dimmed">
                Don't have an account? Register
              </Anchor>
              <Button type="submit" radius="xl">
                Login
              </Button>
            </Group>
          </form>
        </Paper>
      </div>
      <div className="w-1/2 min-h-screen bg-gray-500 border-l">
        <img
          src={
            image ??
            "https://cdn.pixabay.com/photo/2025/09/29/11/48/feather-9862263_960_720.jpg"
          }
          alt="login-1"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default Login;
