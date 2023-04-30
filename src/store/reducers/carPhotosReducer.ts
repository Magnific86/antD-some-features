import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarouselState, IPhoto } from "../storeTypes";




// export const fetchCarPhotos = createAsyncThunk(
//     'carPhotos/fetchCarPhotos',
//     async(_, {dispatch}) => {
//             try {
//                 const resp = await fetch('https://api.jikan.moe/v4/anime/102/pictures')
//                 const data = await resp.json()
//                 console.log(data);
                

//                 if(!resp.ok) {
//                     throw new Error("Cannot fetch")
//                 } 
//                     dispatch(getCarPhotos(data))
                

//             } catch (e) {
//                console.error(e.message)
//             }
//     }
// )



const initialState: CarouselState = {
    carPhotos: []
}

const sliceReducer = createSlice({
    name: 'carPhotos',
    initialState,
    reducers: {
        getCarPhotos(state, action: PayloadAction<IPhoto[]>) {
            state.carPhotos = action.payload
        }
    },

})

export const carPhotosReducer = sliceReducer.reducer
export const {getCarPhotos} = sliceReducer.actions