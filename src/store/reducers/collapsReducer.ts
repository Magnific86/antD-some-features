import { createSlice } from "@reduxjs/toolkit"
import { ICollapse } from "../storeTypes"

const initialState: ICollapse = {
  collapse: true,
}

const sliceReducer = createSlice({
  name: "colapse",
  initialState,
  reducers: {
    setCollapse(state) {
      state.collapse = !state.collapse
    },
  },
})

export const collapseReducer = sliceReducer.reducer
export const { setCollapse } = sliceReducer.actions
