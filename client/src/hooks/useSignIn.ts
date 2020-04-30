import { useReducer, FormEvent, ChangeEvent } from 'react';
import { apiCall } from '~/utils';

const CHANGE_STATE = 'signup/change_state';

type TypeState = {
  id: string;
  password: string;
  isLoading: boolean;
};

type TypeAction = {
  type: typeof CHANGE_STATE;
  payload: any;
};

const reducer = (state: TypeState, action: TypeAction) => {
  switch (action.type) {
    case CHANGE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const initialState: TypeState = {
  id: '',
  password: '',
  isLoading: false,
};

export type TypeSignIn = {
  state: typeof initialState;
  onSubmit(e: FormEvent): void;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

function useSignIn(): TypeSignIn {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await apiCall.post('/api/login', {
        user_id: state.id,
        password: state.password,
      });
    } catch (err) {
      console.error(err);
    }
  };

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    dispatch({
      type: CHANGE_STATE,
      payload: {
        [name]: value,
      },
    });
  }

  return {
    state,
    onSubmit,
    onChange,
  };
}

export default useSignIn;
