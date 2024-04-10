import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProduct} from "./types.ts";

export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], string[] | null>({
      query: (dealers) => {
        const params = dealers ? `dealers=${dealers.join(',')}` : null;
        return `/goods${params ? `?${params}` : ''}`;
      }
    })
  })
})

export const {useFetchAllProductsQuery} = productApi