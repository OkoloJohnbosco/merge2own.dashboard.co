import Section from "@/components/section";
import useGetQuestions from "@/hooks/questions/use-get-questions";
import { Heading, Stack, Text } from "@chakra-ui/react";
import DynamicForm from "./dynamic-form";

function OnboardingPage() {
  const questions = useGetQuestions();
  return (
    <Stack spacing={10} pb={10}>
      <Stack py={6} borderBottom="1px solid" borderColor="gray.200">
        <Section textAlign="center">
          <Text>Onboarding</Text>
          <Heading>Getting to know you more.</Heading>
        </Section>
      </Stack>
      <Stack>
        <DynamicForm />
      </Stack>
    </Stack>
  );
}

export default OnboardingPage;
