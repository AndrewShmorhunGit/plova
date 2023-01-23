import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const plovaApi = createApi({
  reducerPath: "src/units/",
  baseQuery: fetchBaseQuery({ baseUrl: "data/" }),
  endpoints: (build) => ({
    searchBrandData: build.query<any, string>({
      query: (search: string) => ({
        url: "menu/",
      }),
    }),
  }),
});

export const { useSearchBrandDataQuery } = plovaApi;
