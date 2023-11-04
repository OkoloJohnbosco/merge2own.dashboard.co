import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetCustomerTypes = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_CUSTOMER_TYPES,
    queryKey: [NAMESPACE.GET_CUSTOMER_TYPES],
  });
};

export default useGetCustomerTypes;
