import { CustomMethod, SecureRequestProps } from "@/types/api.types";
import axios from "axios";

export const secureRequest = async ({
  url,
  method = "get",
  body = undefined,
  headers: requestHeader,
}: SecureRequestProps) => {
  // const token = "session?.accessToken";
  const givenMethod = method.toLocaleLowerCase() as CustomMethod;

  const nigalexHeader = {
    // Authorization: `Bearer ${token}`,
    "Content-Type": url.includes("bid/create")
      ? "application/*"
      : "application/json",
    // "Content-Type": "application/json, multipart/form-data",
    "X-API-KEY": "37b7cf95233f5f90be3d51840648976f",
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
