import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getCoutries: build.query({
      query: () => ({
        method: "GET",
        url: "/country",
      }),
      providesTags: ["COUNTRY"],
    }),
    createCoutry: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/country",
        body,
      }),
      invalidatesTags: ["COUNTRY"],
    }),
    deleteCoutry: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/country/${id}`,
      }),
      invalidatesTags: ["COUNTRY"],
    }),
    updateCoutry: build.mutation({
      query: ({ id, ...body }) => ({
        method: "PUT",
        url: `/country/${id}`,
        body,
      }),
      invalidatesTags: ["COUNTRY"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetCoutriesQuery,
  useCreateCoutryMutation,
  useDeleteCoutryMutation,
  useUpdateCoutryMutation
} = extendedApi;
