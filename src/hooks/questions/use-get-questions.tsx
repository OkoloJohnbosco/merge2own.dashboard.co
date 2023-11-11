import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetQuestions = () => {
  return useQueryActionHook<
    {
      id: string;
      name: string;
    }[]
  >({
    method: "get",
    endpoint: ENDPOINTS.GET_QUESTIONS,
    queryKey: [NAMESPACE.GET_QUESTIONS],
  });
};

export default useGetQuestions;
