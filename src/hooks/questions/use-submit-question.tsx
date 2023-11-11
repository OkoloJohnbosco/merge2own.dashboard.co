import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

function useSubmitQuestion() {
  return useCustomMutation<
    Record<string, unknown>,
    {
      user_id: string;
      question_responses: {
        question_id: string;
        question_answer: string;
      }[];
    }
  >({
    method: "post",
    endpoint: ENDPOINTS.SUBMIT_QUESTIONS,
    message: "Onboarding questions submitted successfully",
  });
}

export default useSubmitQuestion;
