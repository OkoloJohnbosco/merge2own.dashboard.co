import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";

function Contact({
  img,
  title,
  value,
}: {
  img: unknown;
  title: string;
  value: string;
}) {
  return (
    <HStack spacing={4}>
      <Box
        w="48px"
        h="48px"
        bg="brand.yellow"
        rounded={5}
        display="grid"
        placeItems="center"
      >
        <Image src={img as string} maxW={"28px"} alt="" />
      </Box>
      <Stack>
        <Heading fontSize="md" color="brand.darkGray">
          {title}
        </Heading>
        <Text color="brand.sand">{value}</Text>
      </Stack>
    </HStack>
  );
}

export default Contact;
