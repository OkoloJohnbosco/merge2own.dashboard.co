import IfElse from "@/components/if-else";
import Section from "@/components/section";
import useLocalStorage from "@/hooks/hooks-ts/use-localstorage";
import useGetQuestions from "@/hooks/questions/use-get-questions";
import { MERGE2OWN } from "@/lib/constants";
import { Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicForm from "./dynamic-form";

function OnboardingPage() {
  const getQuestions = useGetQuestions();
  const [value] = useLocalStorage<{ question_answered: string }>(
    MERGE2OWN.USER,
    {
      question_answered: "",
    }
  );
  const navigate = useNavigate();

  React.useLayoutEffect(() => {
    if (value.question_answered === "1") {
      navigate("/", { replace: true });
    }
  });

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
          ifOn={
            !getQuestions.isLoading &&
            !!getQuestions?.value &&
            value.question_answered === "0"
          }
          ifOnElse={
            getQuestions.isLoading &&
            !getQuestions?.value &&
            value.question_answered === "1"
          }
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
