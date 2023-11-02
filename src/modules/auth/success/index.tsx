import Section from "@/components/section";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import houseImg from "../../../assets/house.svg";
import smallImg from "../../../assets/small.svg";
import tickImg from "../../../assets/tick.svg";

function SuccessPage() {
  return (
    <Stack>
      <SimpleGrid
        alignItems={{ base: "start", md: "center" }}
        columns={{ base: 1, md: 2 }}
        gap={{ base: 8, md: 10 }}
        minH="calc(100vh - 82px)"
        bg="white"
      >
        <Section h="full" py={10} justifyContent="center" maxW="550px">
          <Box maxW="200px" pb={4}>
            <Image src={tickImg} alt="" />
          </Box>
          <Stack spacing={4}>
            <Heading fontSize="2xl">
              Thank you for creating an account with us!
            </Heading>
            <Text>
              Thank you for creating an account with us. We are excited to start
              this next chapter with you.
            </Text>

            <Heading pt={5} size="sm">
              What’s next?{" "}
            </Heading>

            <Text>
              Please check your email to continue with the next steps in our
              registration process. We will have a few additional questions to
              better understand your needs and preferences.
            </Text>
            <Stack pt={10}>
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
                maxW="200px"
                variant="primary"
                to="/login"
              >
                Back to homepage
              </Button>
            </Stack>
          </Stack>
        </Section>

        <Stack
          w="full"
          bg="brand.merge"
          h="full"
          alignItems="center"
          justifyContent="center"
          display={{ base: "none", md: "flex" }}
        >
          <Box
            maxW={{ base: "auto", sm: "300px" }}
            justifySelf="flex-end"
            pos="relative"
          >
            <Box
              maxW="200px"
              display={{ base: "none", sm: "block" }}
              position="absolute"
              bottom={10}
              left={-20}
            >
              <Image src={smallImg} alt="" />
            </Box>
            <Image src={houseImg} alt="" />
          </Box>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}

export default SuccessPage;
