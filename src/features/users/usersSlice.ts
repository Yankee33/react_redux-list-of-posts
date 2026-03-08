/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../../api/users';
import { User } from '../../types/User';

export const fetchUsers = createAsyncThunk('users/fetchAll', () => {
  return getUsers();
});

type UsersState = {
  items: User[];
  loaded: boolean;
};

const initialState: UsersState = {
  items: [],
  loaded: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.items = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.loaded = true;
    });
  },
});

export default usersSlice.reducer;
