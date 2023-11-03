import { ENDPOINTS } from "@/lib/constants";
import { secureRequest } from "@/lib/utils/api.utils";
import { QuikeeResponseType, ResponseErrorType } from "@/types/api.types";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

// @ts-ignore
const getMutationAction = (mutationData: any) => {
  const { endpoint, method, headers, isNigalexApi = true } = mutationData;
  const API_BASE_URL =
    import.meta.env.MODE === "development"
      ? ENDPOINTS.API_BASE_URL
      : ENDPOINTS.API_BASE_URL;

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
  // @ts-ignore
>(mutationData: any) {
  const {
    mutationFn,
    endpoint,
    showSuccessToast = true,
    showFailureToast = true,
    ...others
  } = getMutationAction({
    ...mutationData,
  });
  const toast = useToast({
    position: "top-right",
    variant: "left-accent",
    duration: 5000,
    isClosable: true,
    containerStyle: {
      maxWidth: "400px",
      fontSize: "nm",
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
      if (!err && showSuccessToast) {
        toast({
          title: `Request Successful`,
          description: `${res?.data?.message}`,
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
