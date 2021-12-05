import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIRoute } from 'const';

const BASE_URL = 'http://localhost:3001';

export const queryApi = createApi ({
  reducerPath: 'queryApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (build) => ({
    getQuests: build.query({
      query: () => APIRoute.Quests,
    }),
    getQuest: build.query({
      query: (id) => `${APIRoute.Quests}/${id}`,
    }),

    postOrder: build.mutation({
      query: (body) => ({
        url: APIRoute.Orders,
        method: 'POST',
        body: {...body, isLegal: true}
      })
    })
  })
})

export const {useGetQuestsQuery, useGetQuestQuery, usePostOrderMutation} = queryApi;
