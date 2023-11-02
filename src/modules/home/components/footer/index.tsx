import {
  Box,
  Divider,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "react-feather";
import logoImg from "../../../../../src/assets/logo.svg";
import Icon from "../../../../components/icon";
import Section from "../../../../components/section";

const btnStyles = {
  size: "sm",
  color: "white",
  bg: "brand.green",
  rounded: "full",
  _hover: {
    bg: "brand.green",
  },
};
function Footer() {
  return (
    <Stack py={20} color="white" bg="brand.merge">
      <Section spacing={16}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} gap={10}>
          <Stack fontWeight="medium" spacing={4}>
            <Box maxW="140px" maxH="60px">
              <Image src={logoImg} alt="jsjsj" />
            </Box>
            <Stack>
              <HStack alignItems="flex-start">
                <Icon opacity="0.5" iconComp={MapPin} />
                <Stack>
                  <Text>Example of location</Text>
                  <Text opacity="0.5">
                    123 Anywhere St., Any City, 12345 Any State
                  </Text>
                </Stack>
              </HStack>
              <HStack
                opacity="0.5"
                as={"a"}
                href="tel:+1 (548) 398-2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon iconComp={Phone} />
                <Text>+1 (548) 398-2025</Text>
              </HStack>
              <HStack
                opacity="0.5"
                as="a"
                href="mailto:info@merge2own.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon iconComp={Mail} />
                <Text>info@merge2own.com</Text>
              </HStack>
            </Stack>
          </Stack>
          <Stack
            fontWeight="medium"
            justifySelf={{ base: "start", lg: "center" }}
            spacing={4}
          >
            <Text>Quick Links</Text>
            <Text>About Us</Text>
            <Text>Partnerships</Text>
            <Text>How it works</Text>
          </Stack>
          <Stack fontWeight="medium" spacing={4}>
            <Text>Discover</Text>
            <Text>Handyman Services</Text>
            <Text>Cleaning Services</Text>
            <Text>Delivery Services</Text>
            <Text>Removalists</Text>
            <Text>Automotive</Text>
            <Text>All Services</Text>
          </Stack>
        </SimpleGrid>
        <Stack spacing={4}>
          <Divider />
          <HStack gap={4} flexWrap="wrap" justifyContent="space-between">
            <HStack>
              <Text>Follow us</Text>
              <IconButton
                as="a"
                aria-label="facebook"
                href="https://www.facebook.com/profile.php?id=100093672155109"
                target="_blank"
                rel="noopener noreferrer"
                {...btnStyles}
              >
                <Icon boxSize={4} iconComp={Facebook} />
              </IconButton>
              <IconButton
                as="a"
                aria-label="linkedin"
                href="https://www.linkedin.com/in/merge2own-inc/?originalSubdomain=ca"
                target="_blank"
                rel="noopener noreferrer"
                {...btnStyles}
              >
                <Icon boxSize={4} iconComp={Linkedin} />
              </IconButton>

              <IconButton
                as="a"
                aria-label="instagram"
                href="https://instagram.com/merge2own?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                {...btnStyles}
              >
                <Icon boxSize={4} iconComp={Instagram} />
              </IconButton>

              <IconButton
                as="a"
                aria-label="twitter"
                href="https://twitter.com/Merge2Own"
                target="_blank"
                rel="noopener noreferrer"
                {...btnStyles}
              >
                <Icon boxSize={4} iconComp={Twitter} />
              </IconButton>
            </HStack>
            <HStack spacing={2} opacity="0.5">
              <Text>Privacy Policy</Text>
              <Text>|</Text>
              <Text>Terms & Conditions</Text>
              <Text>|</Text>
              <Text>Cookie Policy</Text>
            </HStack>
          </HStack>
        </Stack>
      </Section>
    </Stack>
  );
}

export default Footer;
