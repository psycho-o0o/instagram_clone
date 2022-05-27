import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/redux/hooks';
import Home from '@/features/home/Home';

export default function HomePage() {
  const router = useRouter();
  const { isLogin } = useAppSelector((state) => ({
    isLogin: state.user.isLogin,
  }));

  useEffect(() => {
    if (!isLogin) router.push('/');
  }, [isLogin]);

  if (isLogin) return <Home />;
  return <div />;
}
