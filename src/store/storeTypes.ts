interface IJPG {
  image_url: string
}

export interface IPhoto {
  jpg: IJPG
}

export interface CarouselState {
  carPhotos: IPhoto[]
}

export interface AlbumState {
  albumPhotos: IPhoto[]
  error: string
  isLoading: boolean
  list: IPhoto[]
}

interface IAddress {
  city: string
  street: string
  zipcode: string
}

export interface IUser {
  name: string
  username: string
  email: string
  address: IAddress
}

export interface IMyUser {
  id: string
  name: string
  username: string
  email: string
  city: string
  street: string
  zipcode: string
}

export interface UsersState {
  users: IMyUser[]
}

export interface ICollapse {
  collapse: boolean
}
