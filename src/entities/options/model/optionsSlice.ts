import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: {dealers: string[]} = {
  dealers: []
}

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setDealers: (state, action: PayloadAction<string[] | null>) => {
      state.dealers = action.payload || []
    }
  }
})

export const {setDealers} = optionsSlice.actions
export default optionsSlice.reducer