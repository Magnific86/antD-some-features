import { configureStore } from "@reduxjs/toolkit"
import { carPhotosReducer } from "./reducers/carPhotosReducer"
import { loginReducer } from "./reducers/loginReducer"
import { albumPhotosReducer } from "./reducers/albumPhotosReducer"
import { usersReducer } from "./reducers/userReducer"
import { collapseReducer } from "./reducers/collapsReducer"
import { photosApi } from "./photosService/photosService"

export const store = configureStore({
  reducer: {
    carPhotos: carPhotosReducer,
    login: loginReducer,
    albumPhotos: albumPhotosReducer,
    users: usersReducer,
    collapse: collapseReducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), photosApi.middleware],
  middleware: (prev) => prev().concat(photosApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
