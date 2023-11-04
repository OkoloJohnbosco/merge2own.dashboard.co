import IfElse from "@/components/if-else";
import CustomInput from "@/components/input";
import useAuthRegister from "@/hooks/auth/use-auth-register";
import useGetCustomerTypes from "@/hooks/cusomer/use-get-customer-types";
import {
  Box,
  Button,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

const schema = yup.object({
  first_name: yup.string().required("First name is required").trim(),
  last_name: yup.string().required("Last name is required").trim(),
  phone_number: yup.string().required("Phone number is required").trim(),
  email: yup
    .string()
    .required("email is required")
    .email("Enter a valid email")
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
  const [value, setValue] = React.useState<string>("");
  const customerTypes = useGetCustomerTypes();
  const authRegister = useAuthRegister();

  const submitLoginRequest: SubmitHandler<Inputs> = (data: Inputs) => {
    authRegister
      .mutateAsync({
        ...data,
        customer_type_id: value,
      })
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
          <Stack spacing={5}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              <CustomInput
                {...register("first_name")}
                errors={errors}
                label="First Name"
                placeholder="John"
              />
              <CustomInput
                {...register("last_name")}
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
                {...register("phone_number")}
                errors={errors}
                label="Phone number (optional)"
                placeholder="+17382372"
              />
            </SimpleGrid>
          </Stack>

          <IfElse
            ifOn={!customerTypes.isLoading && !!customerTypes?.value}
            ifOnElse={customerTypes.isLoading && !customerTypes?.value}
            onElse={
              <Box maxW="300px">
                <SkeletonText
                  mt="4"
                  startColor="gray.200"
                  endColor="gray.300"
                  noOfLines={5}
                  spacing="2"
                  skeletonHeight="2"
                />
              </Box>
            }
          >
            <Stack>
              <Text>What best describes you? </Text>
              <RadioGroup size="sm" onChange={setValue} value={value}>
                <Stack>
                  {customerTypes?.value?.map((item) => (
                    <Radio key={item.id} value={item.id}>
                      {item.name}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </Stack>
          </IfElse>

          <Button
            isDisabled={!value}
            variant="primary"
            w="full"
            type="submit"
            isLoading={authRegister.isLoading}
          >
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
