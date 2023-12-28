import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userdata {
  userName: string;
  planActivated: boolean;
  userExists: any;
   searchQuery:any;
}

interface UserState {
  user: userdata;
}

const initialState: UserState = {
  user: {
    userName: "",
    planActivated: false,
    userExists: null,
   searchQuery:"",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<any>) => {
      state.user.userExists = action.payload;
    },
    logoutUser: (state, action: PayloadAction<any>) => {
      state.user.userExists = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<any>) => {
      state.user.searchQuery = action.payload;
    },
  },
});

export const { loginUser, logoutUser,setSearchQuery } = userSlice.actions;
export default userSlice.reducer;
