import { Box, Image, Stack, Text } from "@chakra-ui/react";

function PartnerCard({ img, text }: { img: string; text: string }) {
  return (
    <Box
      shadow="base"
      mb={2}
      maxW="240px"
      ml={2}
      rounded="lg"
      overflow="hidden"
    >
      <Box minH={{ base: "100px", sm: "170px" }} bg="gray.100">
        <Image src={img} alt="" />
      </Box>
      <Stack justifyContent="center" minH="70px" p={4} bg="white">
        <Text fontWeight="medium">{text}</Text>
      </Stack>
    </Box>
  );
}

export default PartnerCard;
