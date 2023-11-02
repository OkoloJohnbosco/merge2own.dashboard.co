// Api Endpoints
export const ENDPOINTS = {
  // API_BASE_URL: process.env.NEXT_PUBLIC_BACKEND,
  API_BASE_URL: "https://api.nigalexbid.com.ng/api/",

  // Auth endpoints
  AUTH_INITIATE_SIGNIN: "auth/login",
  VERIFY_SIGNUP_DETAILS: "/auth/verify/signup",

  // categories
  GET_CATEGORIES: "categories",

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
  // Bid
  GET_SINGLE_BID: "GET_SINGLE_BID",
  GET_SUBMITTED_BIDS: "GET_SUBMITTED_BIDS",
  GET_ALL_BIDS: "GET_ALL_BIDS",
  AUTH_CHANGE_PASSWORD: "AUTH_CHANGE_PASSWORD",

  // Admin
  GET_ALL_ADMINS: "GET_ALL_ADMINS",
  // categories
  GET_CATEGORIES: "GET_CATEGORIES",

  // user
  GET_USER_DETAILS: "GET_USER_DETAILS",
  GET_REPORT_DATA: "GET_REPORT_DATA",
  GET_ALL_VENDORS: "GET_ALL_VENDORS",
};
