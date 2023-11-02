import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { AxiosRequestHeaders, AxiosResponse, Method } from "axios";

export type MethodTypes = "get" | "post" | "patch" | "put" | "delete";

export interface SecureRequestProps<T = Record<string, unknown>> {
  method?: Method;
  url: string;
  body?: Record<string, unknown> | FormData;
  isCreathorsApi?: boolean;
  baseURL?: string;
  headers?: AxiosRequestHeaders;
  endpoint?: string;
  queryKey?: string | string[] | number[];
  showToast?: boolean;
  token?: string;
  queryFn?: QueryFunction<NigalexResponseType<T>, QueryKey>;
}

export interface RequestResponse<T = Record<string, unknown>> {
  queryFn?: QueryFunction<NigalexResponseType<T>, QueryKey>;
}

// export interface NigalexResponseType<D = Record<string, unknown>> {
//   data: {
//     response_code: string;
//     data: D;
//     message: string;
//     status: string;
//     response_message: string;
//     pageNumber: number;
//     pageSize: number;
//     total: number;
//   };
// }

export type NigalexResponseType<D = Record<string, unknown>> = AxiosResponse<
  CredentialsServerResponseModel<D>
>;

export type CredentialsServerResponseModel<T> = {
  data: T;
  oid: any;
  response_message: string;
  pageNumber: number;
  pageSize: number;
  total: number;
  response_code: string;
  errors: Record<string, unknown>;
  errorCode: number;
  status: string;
  message: string;
};

export interface ResponseErrorType {
  message: string;
  name: string;

  response: {
    data: {
      response_message: string;
      status: string;
      statusCode: number;
      message: string;
      details: string[];
      source: string;
    };
  };
}

export type CustomMethod = "get" | "put" | "delete" | "post";

// Cart interfaces
export interface CartQuantityUpdate {
  cartItemId: number;
  quantity: number;
}

export type RefreshTokenResponseModel = {
  accessToken: string;
  accessTokenExpiry: number;
  refreshToken: string;
};

export interface IAuthUserSigninResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  accessTokenExpiry: number;
  refreshToken: string;
}

// Auth Interfaces
export interface LoginReq {
  email: string;
  password: string;
}

// change password
export interface IChangePassword {
  id: number;
  old_password: string;
  new_password: string;
  confirm_password: string;
}

export interface IBidSchema {
  id: string;
  created: string;
  modified: string;
  preferred_delivery_date: string;
  start_date: string;
  end_date: string;
  win_company: string;
  won: string;
  active: string;
  order_id: string;
  bid_desc: string;
  item_desc: string;
  category: string;
  max_price: number;
  bid_count: string;
  win_price: string;
  status: "OPEN" | "CLOSED" | "CANCELLED";
  image: string;
  has_bidden: boolean;
  bid_requirements: string;
  quantity: string;
  bid_document: string;
}

export interface IBidHistorySchema {
  bid_desc: string;
  item_desc: string;
  status: "OPEN";
  bid_amount: string;
  bid_quote: string;
  created: string;
  id: string;
  image: string;
  start_date: string;
  won: string;
  end_date: string;
}
export interface IUserSchema {
  id: string;
  full_name: string;
  phone_number: string;
  email: string;
  company_name: string | null;
  company_address: string | null;
  created: string;
  rc_number: string | null;
  user_type: string;
  postal_code: string | null;
  alternate_phone: string | null;
  cac_document: string | null;
  modified: string;
  active: string;
}

export type BidStatus = "pending" | "won" | "lost";
