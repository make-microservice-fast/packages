import { Group, NumberInput, TextInput } from "@mantine/core";
import { DynamicRegister } from "../../components/pages/dynamic-register";
import {
  RegisterFormProvider,
  useRegisterForm,
} from "../../context/register-context";

const DynamicRegisterExample = () => {
  const form = useRegisterForm({
    mode: "uncontrolled",
    initialValues: {
      name: "john",
      email: "john@initial.com",
      age: "18",
      phoneNumber: "",
      password: "",
    },
  });
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <RegisterFormProvider form={form}>
        <form
          onSubmit={form.onSubmit((data) => console.log(data))}
          className="w-96"
        >
          <DynamicRegister>
            <Group gap={5} grow mt="xs" mb="md">
              <TextInput
                label="Phone"
                placeholder="Phone"
                name="phoneNumber"
                error={form.errors.phoneNumber}
                key={form.key("phoneNumber")}
                {...form.getInputProps("phoneNumber")}
              />
              <NumberInput
                label="Age"
                placeholder="Age"
                name="age"
                error={form.errors.age}
                key={form.key("age")}
                {...form.getInputProps("age")}
              />
            </Group>
          </DynamicRegister>
        </form>
      </RegisterFormProvider>
    </div>
  );
};
export default DynamicRegisterExample;
