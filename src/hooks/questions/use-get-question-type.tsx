import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetQuestionType = () => {
  return useQueryActionHook<
    {
      id: string;
      name: string;
    }[]
  >({
    method: "get",
    endpoint: ENDPOINTS.GET_QUESTION_TYPES,
    queryKey: [NAMESPACE.GET_QUESTION_TYPES],
  });
};

export default useGetQuestionType;
