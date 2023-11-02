import {
  Box,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Check } from "react-feather";
import houseImg from "../../../../assets/house.svg";
import smallImg from "../../../../assets/small.svg";
import Icon from "../../../../components/icon";
import Section from "../../../../components/section";
import { reasons } from "../../../../lib/utils/component.utils";

function WhyMerge2Own() {
  return (
    <Stack id="works" py={{ base: 12, sm: 24 }} bg="brand.fade">
      <Section spacing={12}>
        <Stack spacing={4} color="brand.darkGreen" maxW="800px">
          <Heading fontSize="28px" colorScheme="brand.darkGreen">
            Why choose Merge 2 Own?
          </Heading>
          <Text lineHeight={6}>
            Merge2Own collaborates with trusted partners ranging from real
            estate agencies and financial institutions to background check
            providers and educational bodies, providing a secure, comprehensive,
            and educative platform for seamless property co-ownership.
          </Text>
        </Stack>
        <SimpleGrid
          alignItems={{ base: "start", md: "center" }}
          columns={{ base: 1, md: 2 }}
          gap={{ base: 8, md: 10 }}
        >
          <Stack spacing={4} alignSelf="center">
            {reasons.map((item) => (
              <HStack
                key={item.title}
                p={5}
                bg="white"
                rounded="md"
                alignItems="flex-start"
                spacing={4}
                shadow="0px 80px 120px 0px rgba(51, 51, 51, 0.10)"
              >
                <Box
                  w="7"
                  h="7"
                  flexShrink={0}
                  rounded="full"
                  display="grid"
                  placeItems="center"
                  color="white"
                  bg="brand.darkGreen"
                >
                  <Icon iconComp={Check} boxSize={4} />
                </Box>
                <Stack>
                  <Heading fontSize={{ base: "18px", md: "24px" }} color="#333">
                    {item.title}
                  </Heading>
                  <Text color="#666">{item.text}</Text>
                </Stack>
              </HStack>
            ))}
          </Stack>

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
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default WhyMerge2Own;
