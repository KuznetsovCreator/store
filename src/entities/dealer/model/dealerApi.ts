import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const dealerApi = createApi({
  reducerPath: 'dealer',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: (build) => ({
    fetchAllDealers: build.query<string[], void>({
      query: () => {
        return '/dealers'
      }
    })
  })
})

export const {useFetchAllDealersQuery} = dealerApi