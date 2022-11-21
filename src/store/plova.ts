import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const plovaApi = createApi({
  reducerPath: "plova/api",
  baseQuery: fetchBaseQuery({ baseUrl: "../units/" }),
  endpoints: (build) => ({
    searchBrandData: build.query({
      query: () => ({
        url: "BigMenuDataSet.ts",
      }),
    }),
  }),
});
