import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import firstImg from "../../../../../src/assets/first.svg";
import Section from "../../../../components/section";

function OwnerShip() {
  return (
    <Stack
      py={14}
      bg="brand.merge"
      color="white"
      overflow="hidden"
      pb={24}
      position="relative"
    >
      <Box
        pos="absolute"
        h="350px"
        w="350px"
        bg="brand.yellow"
        bottom={-28}
        right={-6}
        rounded="full"
      />
      <Section>
        <SimpleGrid
          alignItems={{ base: "start", md: "center" }}
          columns={{ base: 1, md: 2 }}
          gap={{ base: 8, md: 10 }}
        >
          <Stack spacing={4} maxW={{ base: "450px", md: "350px" }}>
            <Heading fontSize={{ base: "28px", sm: "32px", md: "48px" }}>
              Co-ownership <br />
              for{" "}
              <Text as="span" color="brand.yellow">
                everybody
              </Text>
            </Heading>
            <Text>
              Launching in Canada very soon,
              <br /> join the waitlist to be notified.
            </Text>
            <HStack
              bg="white"
              spacing={1}
              p={1}
              rounded="full"
              w="full"
              overflow="hidden"
            >
              <Input
                size="sm"
                bg="transparent"
                placeholder="Enter email"
                color="brand.darkGray"
                fontSize="sm"
                outline="none"
                border="none"
                _focus={{
                  shadow: "0 0 0 0px transparent",
                }}
                _hover={{
                  bg: "",
                }}
              />
              <Button
                size="sm"
                fontSize="10px"
                fontWeight="bold"
                px={5}
                bg="brand.green"
                border="0px"
                outline="1px solid transparent"
                color="white"
                _hover={{
                  bg: "brand.green",
                }}
                rounded="full"
              >
                SUBMIT
              </Button>
            </HStack>
          </Stack>
          <Stack
            pos="relative"
            justifySelf={{ base: "self-start", md: "self-end" }}
          >
            <Box
              maxW={{ base: "350px", sm: "400px" }}
              minH={{ base: "300px", sm: "400px" }}
            >
              <Image src={firstImg} alt="about image" />
            </Box>
          </Stack>
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default OwnerShip;
