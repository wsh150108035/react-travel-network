import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from 'axios'


interface UserState {
  loading: boolean
  error: string | null
  tocken: string | null
}

const initialState: UserState = {
  loading: false,
  error: null,
  tocken: null
}

export const SignIn = createAsyncThunk(
  "user/signIn",
  async (paramaters: {
    email: string,
    password: string,
  }) => {
    const { email, password } = paramaters
    const { data } = await axios.post(
      `http://123.56.149.216:8080/auth/login`, {
      email,
      password
    }
    );
    return data.token
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.tocken = null
      state.error = null
      state.loading = false
    }
  },
  extraReducers: {
    [SignIn.pending.type]: (state) => {
      state.loading = true
    },
    [SignIn.fulfilled.type]: (state, action: PayloadAction<string | null>) => {
      state.tocken = action.payload;
      state.loading = false;
      state.error = null
    },
    [SignIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload
    }
  }
})
