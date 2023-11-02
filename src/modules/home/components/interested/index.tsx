import { HStack, Heading, Stack } from "@chakra-ui/react";
import Section from "../../../../components/section";
import { contacts } from "../../../../lib/utils/component.utils";
import Contact from "../contact";

function Interested() {
  return (
    <Stack py={{ base: 12, sm: 24 }} bg="white">
      <Section spacing={12}>
        <Heading color="brand.darkGray" textAlign="center" fontSize="28px">
          Interested? Let’s Talk!
        </Heading>
        <HStack
          gap={5}
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
        >
          {contacts.map((item) => (
            <Contact key={item.title} {...item} />
          ))}
        </HStack>
      </Section>
    </Stack>
  );
}

export default Interested;
