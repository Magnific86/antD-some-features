import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IPhoto } from "../storeTypes"

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/anime/" }),
  endpoints: (build) => ({
    fetchPhotoById: build.query<IPhoto[], number>({
      query: (id: number = 5) => ({
        url: `${id}/pictures`,
      }),
    }),
  }),
})
