import Navbar from "@/modules/home/components/navbar";
import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Stack minH="100vh" spacing={0}>
      <Navbar />
      <Stack
        h="full"
        flex={1}
        px={{ base: 3 }}
        className="custom-bg"
        alignItems="center"
        py={{ base: 8 }}
        justifyContent="center"
      >
        <Stack
          w="full"
          maxW="480px"
          border="1px solid #fff"
          px={{ base: 3, sm: 6 }}
          py={{ base: 6, md: 10 }}
          h="auto"
          color="brand.darkGreen"
          spacing={8}
          bg="#ffffff"
          rounded={"2px"}
        >
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AuthLayout;
