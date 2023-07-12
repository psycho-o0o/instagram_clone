import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CheckApi } from '@/features/user/user.slice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

export function checkJWT() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isOnLogin } = useAppSelector((state) => ({
    isOnLogin: state.user.isOnLogin,
  }));

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt !== null) {
      dispatch(CheckApi({ jwt }));
    }

    if (isOnLogin) {
      router.push('/home');
    }
  }, [isOnLogin]);

  return isOnLogin;
}
