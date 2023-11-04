// Api Endpoints
export const ENDPOINTS = {
  API_BASE_URL: "https://api.merge2own.com/api/",

  // Auth endpoints
  AUTH_INITIATE_SIGNIN: "auth/login",
  VERIFY_SIGNUP_DETAILS: "auth/verify/signup",
  AUTH_RESGISTER: "user/create",
  AUTH_FORGOT_PASSWORD: "auth/initiatePasswordReset",
  AUTH_RESET_PASSWORD: "auth/resetPassword",
  // categories
  GET_CUSTOMER_TYPES: "user/customertypes",

  // Admin
  CREATE_ADMIN_USER: "user/create",
  GET_ALL_ADMINS: (
    page: number,
    pageSize: number,
    search?: string,
    date_from?: string,
    date_to?: string
  ) =>
    `user/admin/fetch?page=${page}&pageSize=${pageSize}${
      search ? `&search=${search}` : ""
    }${date_from ? `&date_from=${date_from}` : ""}${
      date_to ? `&date_to=${date_to}` : ""
    }`,
  ENABLE_ADMIN: (adminId: number) => `admin/user/enable/${adminId}`,
  DISABLE_ADMIN: (adminId: number) => `admin/user/disable/${adminId}`,
  // vendor
  GET_ALL_VENDORS: (
    page: number,
    pageSize: number,
    search?: string,
    date_from?: string,
    date_to?: string
  ) =>
    `vendors?page=${page}&pageSize=${pageSize}${
      search ? `&search=${search}` : ""
    }${date_from ? `&date_from=${date_from}` : ""}${
      date_to ? `&date_to=${date_to}` : ""
    }`,
  APPROVE_VENDOR: (vendorId: number) => `admin/vendor/approve/${vendorId}`,
  DECLINE_VENDOR: (vendorId: number) => `admin/vendor/decline/${vendorId}`,

  // Bid
  GET_ALL_BIDS: (
    page: number,
    pageSize: number,
    search?: string,
    date_from?: string,
    date_to?: string,
    category?: string
  ) =>
    `bid/all?page=${page}&pageSize=${pageSize}${
      search ? `&search=${search}` : ""
    }${date_from ? `&date_from=${date_from}` : ""}${
      date_to ? `&date_to=${date_to}` : ""
    }${category ? `&category=${category}` : ""}`,
  GET_SUBMITTED_BIDS: (page: number, pageSize: number, bid?: string) =>
    `bid/submitted/all/?page=${page}&pageSize=${pageSize}${
      bid ? `&bid_id=${bid}` : ""
    }`,

  GET_SINGLE_BID: (id: string) => `bid/?id=${id}`,
  CREATE_BID_REQUEST: "bid/create",
  CANCEL_BID: "bid/cancelbid",

  // user
  GET_USER_DETAILS: (userId: string) => `user/${userId}`,
  UPDATE_USER_DETAILS: "user/update",

  GET_REPORT_DATA: "report/bidreport",
};
export const STOREID = "fbn46374683";

export const NAMESPACE = {
  GET_CUSTOMER_TYPES: "GET_CUSTOMER_TYPES",
};
