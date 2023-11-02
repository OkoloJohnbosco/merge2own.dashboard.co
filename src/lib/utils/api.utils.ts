import { CustomMethod, SecureRequestProps } from "@/types/api.types";
import axios from "axios";

export const secureRequest = async ({
  url,
  method = "get",
  body = undefined,
  headers: requestHeader,
}: SecureRequestProps) => {
  const token = "session?.accessToken";
  const givenMethod = method.toLocaleLowerCase() as CustomMethod;

  const nigalexHeader = {
    Authorization: `Bearer ${token}`,
    "Content-Type": url.includes("bid/create")
      ? "application/*"
      : "application/json",
    // "Content-Type": "application/json, multipart/form-data",
    "X-API-KEY": "448085861cb00206343e5dd25e172d3044a4",
  };

  const headers = { ...nigalexHeader, ...requestHeader };

  if (givenMethod === "get" || givenMethod === "delete") {
    //dont include body in GET request request will fail
    return axios[givenMethod](url, {
      params: {
        ...body,
      },
      headers,
    });
  }

  return axios[givenMethod](url, body, { headers });
};
