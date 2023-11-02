import CustomInput from "@/components/input";
import {
  Button,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | undefined;
  password: string;
};

const schema = yup.object({
  firstName: yup.string().required("First name is required").trim(),
  lastName: yup.string().required("Last name is required").trim(),
  phoneNumber: yup.string().trim(),
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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [value, setValue] = React.useState("1");
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
        <Heading size="lg">Welcome to Merge2own</Heading>
        <Text>Sign in to start using our unique features and services.</Text>
      </Stack>
      <form method="post" onSubmit={handleSubmit(submitLoginRequest)}>
        <Stack spacing={7}>
          <Stack spacing={5}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              <CustomInput
                {...register("firstName")}
                errors={errors}
                label="First Name"
                placeholder="John"
              />
              <CustomInput
                {...register("lastName")}
                errors={errors}
                label="Last name"
                placeholder="Doe"
              />
            </SimpleGrid>

            <SimpleGrid gap={5} columns={{ base: 1, md: 2 }}>
              <CustomInput
                {...register("email")}
                errors={errors}
                label="Email address"
                type="email"
                placeholder="Enter email"
              />
              <CustomInput
                {...register("phoneNumber")}
                errors={errors}
                label="Phone number (optional)"
                placeholder="+17382372"
              />
            </SimpleGrid>
            <CustomInput
              {...register("password")}
              errors={errors}
              type="password"
              label="password"
              placeholder="Password"
            />
          </Stack>

          <Stack>
            <Text>What best describes you? </Text>
            <RadioGroup size="sm" onChange={setValue} value={value}>
              <Stack>
                <Radio value="1">Buyer</Radio>
                <Radio value="2">Investor</Radio>
                <Radio value="3">
                  Home service provider (e.g. plumber. gardener)
                </Radio>
                <Radio value="4">
                  Real estate provider (e.g. mortgage broker, lawyer)
                </Radio>
              </Stack>
            </RadioGroup>
          </Stack>
          <Button variant="primary" w="full" type="submit">
            Create an account
          </Button>
        </Stack>
      </form>
      <HStack justifyContent="center">
        <Text textAlign="center">
          Have an account?
          <Button
            as={Link}
            to="/login"
            colorScheme="green"
            variant="ghost"
            size="xs"
          >
            Sign in
          </Button>
        </Text>
      </HStack>
    </>
  );
};

export default Register;
