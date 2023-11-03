import { ENDPOINTS } from "@/lib/constants";
import { secureRequest } from "@/lib/utils/api.utils";
import { QuikeeResponseType, ResponseErrorType } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

export const getQueryAction = (payload: any) => {
  const { endpoint, method, body, headers, isNigalexApi = true } = payload;

  const url = isNigalexApi ? ENDPOINTS.API_BASE_URL + endpoint : endpoint;

  return {
    queryFn: () => {
      return secureRequest({
        url,
        method,
        body,
        headers,
      });
    },
    ...payload,
  };
};

function useQueryActionHook<T>(data: any) {
  const { queryFn, queryKey, endpoint, ...others } = getQueryAction({
    ...data,
  });

  const queryResult = useQuery<QuikeeResponseType<T>, ResponseErrorType>({
    queryFn,
    queryKey: queryKey || endpoint,

    onError: (err) => {
      if (err) {
        // Push the error
      } else {
        //  push the error
      }
    },
    onSettled: () => {
      return;
    },
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    ...others,
  });

  return {
    ...queryResult,
    value: queryResult.data?.data?.data,
  };
}

export default useQueryActionHook;
