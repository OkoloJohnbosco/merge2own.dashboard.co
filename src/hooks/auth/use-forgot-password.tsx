import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

function useForgotPassword() {
  return useCustomMutation<
    Record<string, unknown>,
    {
      email: string;
    }
  >({
    method: "post",
    endpoint: ENDPOINTS.AUTH_FORGOT_PASSWORD,
  });
}

export default useForgotPassword;
