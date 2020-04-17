import { init, RematchRootState, RematchDispatch } from '@rematch/core';

import * as models from '~/models';

export const store = init({ models: { user: models.user } });

export type Store = typeof store;
export type Dispatch = RematchDispatch<typeof models>;
export type iRootState = RematchRootState<typeof models>;
