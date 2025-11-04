import { createFormContext } from "@mantine/form";

export const [
  RegisterFormProvider,
  useRegisterFormContext,
  useRegisterForm,
] = createFormContext<unknown>();
