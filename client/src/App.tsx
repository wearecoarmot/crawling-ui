import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';
import produce from 'immer';

interface iAppReducer {
  data: string
}

const CHANGE_DATA = 'CHANGE_DATA';

const reducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      draft.data = action.payload
  }
});

const initialState: iAppReducer = {
  data: '',
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function call() {
      try {
        const { data } = await Axios.get('/api');
        dispatch({
          type: CHANGE_DATA,
          payload: data,
        });

      } catch(err) {
        console.error(err);
      }
    }

    call();
  }, []);

  return (
    <div>
      <p>{state.data}</p>
    </div>
  );
};

export default App;
