import useLocalStorage from "@/hooks/hooks-ts/use-localstorage";
import useIsAuthenticated from "@/hooks/use-is-authenticated";
import { MERGE2OWN } from "@/lib/constants";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import logoImg from "../../../../../src/assets/logo.svg";
import Icon from "../../../../components/icon";
import Section from "../../../../components/section";
import Sidebar from "../sidebar";

function Navbar({ isSticky = true }: { isSticky?: boolean }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isAuthenticated } = useIsAuthenticated();
  const [value, setValue] = useLocalStorage<{ question_answered: string }>(
    MERGE2OWN.USER,
    {
      question_answered: "",
    }
  );
  // @ts-expect-error
  const logout = () => setValue(null);
  const toggleHandler = () => {};
  return (
    <Stack
      py={4}
      zIndex="docked"
      bg="brand.merge"
      color="white"
      position={isSticky ? "sticky" : "static"}
      top={0}
    >
      <Section>
        <HStack spacing={4} justifyContent="space-between" alignItems="center">
          <Box maxW="130px" maxH="50px">
            <Image src={logoImg} alt="jsjsj" />
          </Box>
          <HStack
            fontWeight="medium"
            spacing={10}
            display={{ base: "none", md: "flex" }}
            textTransform="uppercase"
            fontSize="sm"
          >
            {isAuthenticated ? (
              <Button
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="11px"
                rounded="10px"
                outline="1px solid transparent"
                _focus={{
                  outline: "1px solid white",
                  shadow: "0 0 0 3px #24694F",
                }}
                variant="primary"
                onClick={logout}
              >
                Logout
              </Button>
            ) : (
              <Button
                fontWeight="bold"
                as={Link}
                textTransform="uppercase"
                fontSize="11px"
                rounded="10px"
                outline="1px solid transparent"
                _focus={{
                  outline: "1px solid white",
                  shadow: "0 0 0 3px #24694F",
                }}
                // rounded="full"
                variant="primary"
                to="/login"
              >
                Register / Sign In
              </Button>
            )}
          </HStack>
          <IconButton
            size="sm"
            colorScheme="green"
            display={{ base: "flex", md: "none" }}
            _hover={{ bg: "brand.merge" }}
            aria-label="menu button"
            bg="brand.merge"
            onClick={onOpen}
          >
            <Icon boxSize={4} iconComp={Menu} />
          </IconButton>
        </HStack>
      </Section>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
}

export default Navbar;
