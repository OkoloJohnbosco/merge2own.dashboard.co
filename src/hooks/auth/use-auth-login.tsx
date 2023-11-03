import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

function useAuthLogin() {
  return useCustomMutation<
    Record<string, unknown>,
    {
      email: string;
      password: string;
    }
  >({
    method: "post",
    endpoint: ENDPOINTS.AUTH_INITIATE_SIGNIN,
  });
}

export default useAuthLogin;
