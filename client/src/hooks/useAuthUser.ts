import { useState } from 'react';

function useAuthUser(): boolean {
  const [isAuth] = useState<boolean>(() => {
    return !!localStorage.getItem('auth');
  });

  return isAuth;
}

export default useAuthUser;
