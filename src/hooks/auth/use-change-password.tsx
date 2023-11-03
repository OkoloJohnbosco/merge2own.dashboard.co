import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

function useChagePassword() {
  return useCustomMutation<
    Record<string, unknown>,
    {
      id: number;
      old_password: string;
      new_password: string;
      confirm_password: string;
    }
  >({
    method: "post",
    endpoint: ENDPOINTS.AUTH_RESGISTER,
  });
}

export default useChagePassword;
