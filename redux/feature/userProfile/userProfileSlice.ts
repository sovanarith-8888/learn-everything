import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@reduxjs/toolkit/query";
import { BASE_URL,TOKEN } from "@/lib/constants";
// Define a type for the use profile
type UserProfile = {
  avatar: string;
  bio: string;
  created_at: string;
  updated_at: string;
}

// Define the intial state using that type
type initialStateType = {
  status: 'idle' | 'loading' | 'success' | 'failed',
  userProfile: UserProfile | null,
  error: string | undefined
}

// object can defind null and const can deine with undefined

const initialState: initialStateType = {
  status: 'idle',
  userProfile: null,
  error: undefined
}

// create asyn thunk
export const fetchUserProfile = createAsyncThunk("userProfile/fetchUserProfile",
  async () => {
    const response = await fetch(`${BASE_URL}api/user/profile/`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
    const data = await response.json();
    return data;
  }
)

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {

  },
  extraReducers:(builder)=>{
    builder.addCase(fetchUserProfile.pending, (state)=>{
      state.status = 'loading';
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action)=>{
      state.status = 'success';
      state.userProfile = action.payload;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action)=> {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
})

export default userProfileSlice.reducer;
//create select
export const selectAvatar = (state: RootState) => state.userProfile?.avatar;
export const selectBio = (state: RootState) => state.userProfile?.bio;