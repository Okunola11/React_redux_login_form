import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      keepUnusedDataFor: 5, // this is about the cache in RTK Query, the default is 60s
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
