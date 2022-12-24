import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto, AlbumState } from "./storeTypes";

const initialState: AlbumState = {
  albumPhotos: [],
};

const sliceReducer = createSlice({
  name: "albumPhotos",
  initialState,
  reducers: {
    getAlbumPhotos(state, action: PayloadAction<IPhoto[]>) {
      state.albumPhotos = [...state.albumPhotos, ...action.payload];
    },
    resetAllAlbumPhotos(state) {
      state.albumPhotos = [];
    },
  },
});

export const albumPhotosReducer = sliceReducer.reducer;
export const { getAlbumPhotos, resetAllAlbumPhotos } = sliceReducer.actions;
