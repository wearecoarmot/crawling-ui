import { createModel } from '@rematch/core';
import { produce, Draft } from 'immer';

export type userState = {
  email: string;
};

export const user = createModel({
  state: {
    email: '',
  },
  reducers: {
    change: produce((state: Draft<userState>, payload) => {
      state.email = payload;
    }),
  },
  effects: (dispatch) => ({
    async changeAsync(payload) {
      dispatch.user.change(payload);
    },
  }),
});
