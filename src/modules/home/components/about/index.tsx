import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import aboutImg from "../../../../../src/assets/about.svg";
import Section from "../../../../components/section";

function AboutUs() {
  return (
    <Stack pos="relative" bg="white" py={{ base: 12, sm: 24 }}>
      <Stack id="about" pos="absolute" top="-82px" zIndex="-2" />
      <Section>
        <SimpleGrid
          alignItems={{ base: "start", md: "center" }}
          columns={{ base: 1, md: 2 }}
          gap={{ base: 8, md: 10 }}
        >
          <Stack spacing={4}>
            <Heading fontSize="28px" color="brand.darkGray">
              About Us
            </Heading>
            <Text lineHeight={6}>
              Merge 2 Own is an early-stage startup that recently won the
              Greenhouse Inc Social Impact Fund Pitch Competition Award. The
              platform is designed to address the limited personal network,
              counterparty trust, and home affordability concerns of first-time
              homebuyers and others who encounter significant barriers to home
              ownership in Canada. Are you experiencing challenges in buying
              your own home or interested in providing services to enable people
              buy their own home? If you are excited as we are in finding
              creative solutions, please sign up to stay informed when we Go
              Live.
            </Text>
          </Stack>
          <Stack justifySelf={{ base: "self-start", md: "self-end" }}>
            <Box maxW="400px">
              <Image src={aboutImg} alt="about image" />
            </Box>
          </Stack>
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default AboutUs;
