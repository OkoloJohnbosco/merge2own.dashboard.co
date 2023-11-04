import CustomInput from "@/components/input";
import useForgotPassword from "@/hooks/auth/use-forgot-password";
import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  email: string;
};

const schema = yup.object({
  email: yup
    .string()
    .required("email is required")
    .email("Enter a valid email")
    .trim(),
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const forgotPassword = useForgotPassword();
  const submitLoginRequest: SubmitHandler<Inputs> = (data: Inputs) => {
    forgotPassword.mutateAsync(data).catch(console.log);
  };

  return (
    <>
      <Stack>
        <Heading size="lg">Forgot password?</Heading>
        <Text>
          Enter your registered email address to receive a link to reset your
          password.{" "}
        </Text>
      </Stack>
      <form method="post" onSubmit={handleSubmit(submitLoginRequest)}>
        <Stack spacing={7}>
          <Stack spacing={3}>
            <CustomInput
              {...register("email")}
              errors={errors}
              label="Email address"
              type="email"
              placeholder="Enter email"
            />
          </Stack>

          <Button
            isLoading={forgotPassword.isLoading}
            variant="primary"
            w="full"
            type="submit"
          >
            Reset Password
          </Button>
        </Stack>
      </form>
      <HStack justifyContent="center">
        <Text textAlign="center">
          <Button
            as={Link}
            to="/login"
            colorScheme="green"
            variant="ghost"
            size="xs"
          >
            Back to sign in
          </Button>
        </Text>
      </HStack>
    </>
  );
};

export default ForgotPassword;
