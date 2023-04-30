import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPhoto, AlbumState } from "../storeTypes"
import axios from "axios"

const initialState: AlbumState = {
  albumPhotos: [],
  error: "",
  isLoading: false,
  list: [],
}

export const fetchPhotosById = createAsyncThunk(
  "albumPhotos/fetchPhotosById",
  async (id: number, { rejectWithValue }) => {
    const config = {
      headers: {
        keys: id,
      },
    }
    try {
      const resp = await axios.get(`https://api.jikan.moe/v4/anime/${id}/pictures`)
      console.log("fetchPhotosById response: ", resp)

      if (resp?.data) {
        return resp.data?.data
      } else {
        return rejectWithValue("resp data nor found!")
      }
    } catch (e) {
      return rejectWithValue(e?.message)
    }
  }
)

const sliceReducer = createSlice({
  name: "albumPhotos",
  initialState,
  reducers: {
    resetAllAlbumPhotos(state) {
      state.albumPhotos = []
    },
  },

  // ============= variant with builder ================
  // extraReducers: (builder) => {
  //   builder.addCase(fetchPhotosById.pending, (state) => {
  //     state.isLoading = true
  //   }),
  //     builder.addCase(fetchPhotosById.fulfilled, (state, action: PayloadAction<IPhoto[]>) => {
  //       state.albumPhotos.push(...action.payload)
  //       state.error = ""
  //       state.isLoading = false
  //     }),
  //     builder.addCase(fetchPhotosById.rejected, (state) => {
  //       state.error = "error while fetch"
  //       state.isLoading = false
  //     })
  // },
  extraReducers: {
    [fetchPhotosById.fulfilled.type]: (state, action: PayloadAction<IPhoto[]>) => {
      state.isLoading = false
      state.error = ""
      state.albumPhotos.push(...action.payload)
      state.list = action.payload
    },
    [fetchPhotosById.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchPhotosById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const albumPhotosReducer = sliceReducer.reducer
export const { resetAllAlbumPhotos } = sliceReducer.actions
