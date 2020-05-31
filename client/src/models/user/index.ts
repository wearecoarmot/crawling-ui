import { createModel } from '@rematch/core';
import { produce, Draft } from 'immer';

export type userState = {
  username: string;
  isLogged: boolean;
  [propName: string]: any;
};

const initialState: Partial<userState> = {
  username: '',
  isLogged: false,
};

export const user = createModel<userState>({
  state: initialState,
  reducers: {
    changeUser: produce((state: Draft<userState>, payload: userState) => {
      state.username = payload.username;
      state.isLogged = payload.isLogged;
    }),
    getUser: produce((state: Draft<userState>, payload: userState) => {}),
  },
  effects: (dispatch) => ({
    async asyncChangeUser(payload) {
      dispatch.user.changeLogged(payload);
    },
    async asyncGetUser() {},
  }),
});
