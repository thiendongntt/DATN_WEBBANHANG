import { createSlice } from '@reduxjs/toolkit';

export const initState = {
  configs: {},
  isLogged: false,
  loginForm: false,
  registerForm: false,
  notifications: 0,
  addresses: [],
  sale: {},
  userInfo: {
    _id: '',
    first_name: '',
    last_name: '',
    avt: '',
    email: '',
    phone: '',
    sex: '',
    role: '',
  },
  numberFavoriteList: 0
};

const commonSlice = createSlice({
  name: 'common',
  initialState: initState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    toggleLogged(state, action) {
      state.isLogged = action.payload;
    },
    setNotifications(state, action) {
      state.notifications = action.payload;
    },
    setConfigs(state, action) {
      state.configs = action.payload;
    },
    setAddresses(state, action) {
      state.addresses = action.payload;
    },
    toggleLoginForm(state, action) {
      state.loginForm = action.payload;
    },
    toggleRegisterForm(state, action) {
      state.registerForm = action.payload;
    },
    getSale(state, action) {
      state.sale = action.payload;
    },
    updateNumberFavoriteList(state, action) {
      state.numberFavoriteList = action.payload;
    }
  },
});

const { actions, reducer } = commonSlice;

export const commonActions = actions;
export default reducer;
