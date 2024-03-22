import { api, tagTypes } from "./base";

export const userApi = api.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getUserBalance: query({
      query: () => "user/balance",
      providesTags: tagTypes,
    }),

    getUserByAccount: query({
      query: (data) => `user/account/${data.accountNumber}`,
      providesTags: tagTypes,
    }),

    withdraw: mutation({
      query: (body) => ({
        url: "/user/withdraw",
        method: "POST",
        body,
      }),
      invalidatesTags: tagTypes,
    }),

    transfer: mutation({
      query: (body) => ({
        url: "/user/transfer",
        method: "POST",
        body,
      }),
      invalidatesTags: tagTypes,
    }),
  }),
});

export const {
  useGetUserBalanceQuery,
  useWithdrawMutation,
  useGetUserByAccountQuery,
  useTransferMutation,
} = userApi;