import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface InterfaceState {
  isOpen: boolean
}

// Define the initial state using that type
const initialState: InterfaceState = {
  isOpen: false,
}

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
        open (state, action: PayloadAction<boolean>) {
            return {...state, isOpen: action.payload}
        }
    },
})

export const { 
    open 
} = interfaceSlice.actions

export default interfaceSlice.reducer