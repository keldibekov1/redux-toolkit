import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query({
      query: () => ({
        method: "GET",
        url:  '/comments'
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetCommentsQuery } = extendedApi