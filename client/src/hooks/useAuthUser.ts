import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { iRootState } from '~/lib/store';

function useAuthUser(): boolean {
  const user = useSelector((state: iRootState) => state.user);
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (user.isLogged) {
      setAuth(true);
    }
  }, [user.isLogged]);

  return isAuth;
}

export default useAuthUser;
