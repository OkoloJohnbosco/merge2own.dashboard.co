import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton />

          <DrawerBody>
            <Stack pt={20} spacing={5}>
              <a href="#about" onClick={onClose}>
                <Text>About us</Text>
              </a>
              <a href="#partnership" onClick={onClose}>
                <Text>Partnerships</Text>
              </a>
              <a href="#works" onClick={onClose}>
                <Text>How it works</Text>
              </a>
              <Button
                fontWeight="medium"
                textTransform="uppercase"
                fontSize="11px"
                rounded="full"
                size="md"
                bg="brand.green"
                color="white"
                _hover={{
                  bg: "brand.green",
                }}
                as="a"
                href="https://signup.merg2own.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
