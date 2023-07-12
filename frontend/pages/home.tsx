import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/redux/hooks';
import Home from '@/features/home/Home';

export default function HomePage() {
  const router = useRouter();
  const { isOnLogin } = useAppSelector((state) => ({
    isOnLogin: state.user.isOnLogin,
  }));

  useEffect(() => {
    if (!isOnLogin) router.push('/');
  }, [isOnLogin]);

  if (isOnLogin) return <Home />;
  return <div />;
}
