import { configureStore } from "@reduxjs/toolkit";
import { carPhotosReducer } from "./carPhotosReducer";
import { loginReducer } from "./loginReducer";
import { albumPhotosReducer } from "./albumPhotosReducer";
import { usersReducer } from "./userReducer";
import { collapseReducer } from "./collapsReducer";

export const store = configureStore({
  reducer: {
    carPhotos: carPhotosReducer,
    login: loginReducer,
    albumPhotos: albumPhotosReducer,
    users: usersReducer,
    collapse: collapseReducer,
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
