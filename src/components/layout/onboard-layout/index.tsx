import Navbar from "@/modules/home/components/navbar";
import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const OnBoardLayout = () => {
  return (
    <Stack minH="100vh" spacing={0}>
      <Navbar isSticky={false} />
      <Stack h="full" flex={1}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default OnBoardLayout;
