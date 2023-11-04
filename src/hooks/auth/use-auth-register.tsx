import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

function useAuthRegister() {
  return useCustomMutation<
    Record<string, unknown>,
    {
      first_name: string;
      last_name: string;
      phone_number: string;
      email: string;
      customer_type_id: string;
    }
  >({
    method: "post",
    endpoint: ENDPOINTS.AUTH_RESGISTER,
  });
}

export default useAuthRegister;
