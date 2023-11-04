import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

function useResetPassword() {
  return useCustomMutation<
    Record<string, unknown>,
    {
      token: string;
      new_password: string;
    }
  >({
    method: "post",
    endpoint: ENDPOINTS.AUTH_RESET_PASSWORD,
  });
}

export default useResetPassword;
