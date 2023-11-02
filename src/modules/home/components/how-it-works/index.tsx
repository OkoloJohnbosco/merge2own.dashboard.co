import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import handyImg from "../../../../assets/handy.svg";
import Section from "../../../../components/section";

function HowItWorks() {
  return (
    <Stack py={{ base: 10, sm: 20 }} bg="white" position="relative">
      <Stack id="works" pos="absolute" top="-82px" zIndex="-2" />
      <Section spacing={12} color="brand.darkGray">
        <Stack spacing={4} maxW="900px">
          <Heading fontSize="28px">How it works</Heading>
          <Text lineHeight={6}>
            The platform employs a rigorous vetting process, matching
            subscribers based on their interests, options, and risk appetite,
            and integrates with payment processors for efficient financial
            management. Key features include a community space for investors,
            options for minimum and maximum group size, and advisory services
            from industry practitioners, among others.
          </Text>
        </Stack>
        <SimpleGrid
          alignItems={{ base: "start", md: "center" }}
          columns={{ base: 1, md: 2 }}
          gap={{ base: 8, md: 10 }}
        >
          <Box maxW="500px">
            <Image src={handyImg} alt="" />
          </Box>
        </SimpleGrid>
        <Stack spacing={2} color="brand.darkGray" maxW="450px">
          <Heading fontSize="md">Handyman Services</Heading>
          <Text lineHeight={6}>
            Handyman can take care of a variety of tasks, including painting,
            cutting grass, trimming bushes, planting or removing trees,
            installing doors and shelves, and repairing furniture. Some focus on
            regular maintenance, and others visit job sites to make repairs when
            needed.
          </Text>
        </Stack>
      </Section>
    </Stack>
  );
}

export default HowItWorks;
