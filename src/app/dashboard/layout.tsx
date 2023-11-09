'use client';
import { useState, useEffect } from 'react';
import NavBar from '../components/user/dashboard/navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../../../firebase/clientApp';
import { getAuth } from 'firebase/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Skeleton } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [sidebar, setSidebar] = useState('active');
    const [user, loading, error] = useAuthState(getAuth(app));

    const updateSidebar = () => {
        if (window.innerWidth < 1024) {
            setSidebar('not-active');
        } else {
            setSidebar('active');
        }
    };

    useEffect(() => {
        updateSidebar();
        window.addEventListener('resize', updateSidebar);

        return () => {
            window.removeEventListener('resize', updateSidebar);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebar(sidebar === 'active' ? 'not-active' : 'active');
    };

    return (
        <>
            <NavBar sidebar={sidebar} toggleSidebar={toggleSidebar}></NavBar>
            <div className={`bg-[#f8fff8] ${sidebar === 'active' ? 'lg:pl-64' : ''}`}>
                <div className="p-8 pt-24 min-h-screen">{children}</div>
            </div>
        </>
    );
}
