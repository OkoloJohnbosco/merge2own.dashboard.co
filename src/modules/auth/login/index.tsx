import CustomInput from "@/components/input";
import useAuthLogin from "@/hooks/auth/use-auth-login";
import {
  Button,
  Checkbox,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .required("email is required")
    .email("Enter a valid email")
    .trim(),
  password: yup
    .string()
    .required("please input password")
    .min(3, "minimum of 3 characters")
    .trim(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const authLogin = useAuthLogin();

  const submitLoginRequest: SubmitHandler<Inputs> = (data: Inputs) => {
    authLogin
      .mutateAsync(data)
      .then(() => navigate("/onboarding"))
      .catch(console.log);
  };

  return (
    <>
      <Stack>
        <Heading size="lg">Welcome to Merge2own</Heading>
        <Text>Sign in to start using our unique features and services.</Text>
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

            <CustomInput
              {...register("password")}
              errors={errors}
              type="password"
              label="password"
              placeholder="Password"
            />
          </Stack>

          <Button
            variant="primary"
            w="full"
            type="submit"
            isLoading={authLogin.isLoading}
          >
            Sign in
          </Button>
        </Stack>
        <Stack>
          <HStack justifyContent="space-between" pt={4}>
            <Checkbox colorScheme="green">
              <Text fontSize="sm">Remember me</Text>
            </Checkbox>
            <Button
              as={Link}
              to="/forgot-password"
              colorScheme="green"
              variant="ghost"
              size="xs"
            >
              Forgot password?
            </Button>
          </HStack>
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

export default Login;
