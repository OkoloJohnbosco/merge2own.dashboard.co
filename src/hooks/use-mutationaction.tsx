import { ENDPOINTS } from "@/lib/constants";
import { secureRequest } from "@/lib/utils/api.utils";
import { QuikeeResponseType, ResponseErrorType } from "@/types/api.types";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

const getMutationAction = (mutationData: any) => {
  const { endpoint, method, headers, isNigalexApi = true } = mutationData;

  const url = isNigalexApi ? ENDPOINTS.API_BASE_URL + endpoint : endpoint;

  return {
    mutationFn: (body: Record<string, unknown>) =>
      secureRequest({
        url,
        method,
        body,
        headers,
      }),
    ...mutationData,
  };
};

function useCustomMutation<
  P = Record<string, unknown>,
  T = Record<string, unknown>
>(mutationData: any) {
  const {
    mutationFn,
    endpoint,
    showSuccessToast = true,
    showFailureToast = true,
    message,
    ...others
  } = getMutationAction({
    ...mutationData,
  });
  const toast = useToast({
    position: "top",
    variant: "left-accent",
    duration: 10000,
    isClosable: true,
    containerStyle: {
      maxWidth: "450px",
      fontSize: "xs",
    },
  });

  const mutatationResult = useMutation<
    QuikeeResponseType<P>,
    ResponseErrorType,
    T
  >(mutationFn, {
    mutationKey: endpoint,

    onError: (err: ResponseErrorType) => {
      if (showFailureToast) {
        toast({
          title: `Request Failed`,
          description: `${err.response?.data ?? err.response?.data?.message}`,
          status: "error",
        });
      }
      mutatationResult.reset();
    },
    onSettled: (res: QuikeeResponseType<P>, err: ResponseErrorType) => {
      if (err) mutatationResult.reset();
      if (!err && (showSuccessToast || message)) {
        toast({
          title: message ? "" : `Request Successful`,
          description: `${message ?? res?.data?.message}`,
          status: "success",
        });
      }
      return;
    },
    retry: false,
    refetchOnWindowFocus: false,
    ...others,
  });

  return { ...mutatationResult, value: mutatationResult?.data?.data };
}

export default useCustomMutation;
