import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import schema from "@/modules/onbaord/schema";
import useQueryActionHook from "../use-queryaction";

const useGetQuestions = () => {
  return useQueryActionHook<typeof schema>({
    method: "get",
    endpoint: ENDPOINTS.GET_QUESTIONS,
    queryKey: [NAMESPACE.GET_QUESTIONS],
  });
};

export default useGetQuestions;
