import CustomInput from "@/components/input";
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

  const submitLoginRequest: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
    // signIn("credentials", {
    //   redirect: false,
    //   email: data.email,
    //   password: data.password,
    //   callbackUrl: "/login",
    // }).then((res) => {
    //   setIsLoading(false);
    //   if (!res?.ok) {
    //     return reqFailed();
    //   }
    //   setTimeout(() => {
    //     reqWarning({
    //       title: "Token Expired",
    //       description: "Please login again",
    //     });
    //     signOut();
    //   }, 86400000);
    //   reqSuccess();
    //   router.replace(query?.callbackUrl ? (query?.callbackUrl as string) : "/");
    // });
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

          <Button variant="primary" w="full" type="submit" data-testid="login">
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
