import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"
import { IMyUser, IUser, UsersState } from "../storeTypes"

const initialState: UsersState = {
  users: [],
}

const sliceReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers(state, action: PayloadAction<IUser[]>) {
      state.users = [
        ...action.payload.map((user) => {
          return {
            id: v4(),
            name: user.name,
            username: user.username,
            email: user.email,
            city: user.address.city,
            street: user.address.street,
            zipcode: user.address.zipcode,
          }
        }),
      ]
    },
    addNewUser(state, action: PayloadAction<IMyUser>) {
      state.users = [...state.users, { ...action.payload, id: v4() }]
    },
    removeUser(state, action: PayloadAction<string>) {
      state.users = [...state.users.filter((user) => user.id !== action.payload)]
    },
  },
})

export const usersReducer = sliceReducer.reducer
export const { getUsers, addNewUser, removeUser } = sliceReducer.actions
