import IfElse from "@/components/if-else";
import Section from "@/components/section";
import useGetQuestions from "@/hooks/questions/use-get-questions";
import { Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import DynamicForm from "./dynamic-form";

function OnboardingPage() {
  const getQuestions = useGetQuestions();

  return (
    <Stack spacing={10} pb={10}>
      <Stack py={6} borderBottom="1px solid" borderColor="gray.200">
        <Section textAlign="center">
          <Text>Onboarding</Text>
          <Heading>Getting to know you more.</Heading>
        </Section>
      </Stack>
      <Stack>
        <IfElse
          ifOn={!getQuestions.isLoading && !!getQuestions?.value}
          ifOnElse={getQuestions.isLoading && !getQuestions?.value}
          onElse={
            <Stack py={20} alignItems="center" justifyContent="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Stack>
          }
        >
          <DynamicForm questionData={getQuestions?.value!} />
        </IfElse>
      </Stack>
    </Stack>
  );
}

export default OnboardingPage;
