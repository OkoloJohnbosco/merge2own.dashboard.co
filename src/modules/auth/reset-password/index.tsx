import CustomInput from "@/components/input";
import useResetPassword from "@/hooks/auth/use-reset-password";
import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  password: string;
  confirm_password: string;
};

const schema = yup.object({
  password: yup
    .string()
    .required("Input password")
    .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/, {
      message: "Please match requirements",
    }),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("new_password")], "Confirm password does not match"),
});

const ResetPassword = ({ kind = "reset" }: { kind?: "reset" | "create" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const resetPassword = useResetPassword();
  let [searchParams] = useSearchParams();
  const token = searchParams.get("token")!;

  const submitLoginRequest: SubmitHandler<Inputs> = (data: Inputs) => {
    resetPassword
      .mutateAsync({
        token,
        new_password: data.password,
      })
      .catch(console.log);
  };
  const text = { reset: "Reset", create: "Create" }[kind];

  return (
    <>
      <Stack>
        <Heading size="lg">{text} password?</Heading>
        <Text>
          Set a strong password that you will not forget and have not used
          before.
        </Text>
      </Stack>
      <form method="post" onSubmit={handleSubmit(submitLoginRequest)}>
        <Stack spacing={7}>
          <Stack spacing={3}>
            <CustomInput
              type="password"
              label="Password"
              placeholder="Password"
              {...register("password")}
              errors={errors}
            />
            <CustomInput
              type="password"
              label="Confirm password"
              placeholder="Confirm password"
              {...register("confirm_password")}
              errors={errors}
            />
          </Stack>

          <Button
            isLoading={resetPassword.isLoading}
            variant="primary"
            w="full"
            type="submit"
          >
            {text} Password
          </Button>
        </Stack>
      </form>
      <HStack justifyContent="center">
        <Text textAlign="center">
          Don’t have an account?
          <Button
            as={Link}
            to="/register"
            colorScheme="green"
            variant="ghost"
            size="xs"
          >
            Register
          </Button>
        </Text>
      </HStack>
    </>
  );
};

export default ResetPassword;
