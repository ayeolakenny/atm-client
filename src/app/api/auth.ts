import { api, tagTypes } from "./base";

export const authApi = api.injectEndpoints({
  endpoints: ({ mutation, query }) => ({
    login: mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: tagTypes,
    }),

    logout: mutation<unknown, void>({
      queryFn: () => ({ data: { success: true } }),
      invalidatesTags: tagTypes,
    }),

    getAuthUser: query({
      query: () => "auth/user",
      providesTags: tagTypes,
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetAuthUserQuery } =
  authApi;
