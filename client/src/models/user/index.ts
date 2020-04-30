import { ChangeEvent } from 'react';
import { createModel } from '@rematch/core';
import { produce, Draft } from 'immer';

export type userState = {
  id: string;
  [propName: string]: any;
};

const initialState: userState = {
  id: '',
};

type TypePayload = ChangeEvent<HTMLInputElement>;

export const user = createModel<userState>({
  state: initialState,
  reducers: {
    change: produce((state: Draft<userState>, payload: TypePayload) => {
      const { name, value } = payload.currentTarget;
      state[name] = value;
    }),
  },
  effects: (dispatch) => ({
    async changeAsync(payload) {
      dispatch.user.change(payload);
    },
  }),
});
