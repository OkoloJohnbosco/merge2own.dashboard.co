import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetQuestionOptions = () => {
  return useQueryActionHook<
    {
      id: string;
      name: string;
    }[]
  >({
    method: "get",
    endpoint: ENDPOINTS.GET_QUESTION_OPTIONS,
    queryKey: [NAMESPACE.GET_QUESTION_OPTIONS],
  });
};

export default useGetQuestionOptions;
