import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Home from '@/features/home/Home';


export default function HomePage() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { isLogin } = useAppSelector((state) => ({
        isLogin: state.user.isLogin,
    }));

    useEffect(() => {
        if(!isLogin) router.push('/');
    }, [isLogin])

    if(isLogin) return <Home />;
    else {
        return <div></div>;
    }
}
