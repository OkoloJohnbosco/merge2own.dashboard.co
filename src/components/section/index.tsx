import { Stack, StackProps } from "@chakra-ui/react";

function Section({ children, ...props }: StackProps) {
  return (
    <Stack w="full" maxW="1150px" mx="auto" px={{ base: 4, md: 6 }} {...props}>
      {children}
    </Stack>
  );
}

export default Section;
