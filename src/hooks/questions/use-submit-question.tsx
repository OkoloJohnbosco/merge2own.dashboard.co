import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

function useSubmitQuestion() {
  return useCustomMutation<
    Record<string, unknown>,
    {
      email: string;
      password: string;
    }
  >({
    method: "post",
    endpoint: ENDPOINTS.SUBMIT_QUESTIONS,
  });
}

export default useSubmitQuestion;
