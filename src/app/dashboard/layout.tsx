'use client';
import { useState, useEffect } from 'react';
import NavBar from '../components/user/dashboard/navbar';
import { app } from '../../../firebase/clientApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
    const auth = getAuth(app);
    const [user, setUser] = useState(false);

    const [sidebar, setSidebar] = useState('active');

    const updateSidebar = () => {
        if (window.innerWidth < 1024) {
            setSidebar('not-active');
        } else {
            setSidebar('active');
        }
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(true);
        } else {
        }
    });

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
    if (user) {
        return (
            <>
                <NavBar sidebar={sidebar} toggleSidebar={toggleSidebar}></NavBar>
                <div className={`bg-[#f8fff8] ${sidebar === 'active' ? 'lg:pl-64' : ''}`}>
                    <div className="p-8 pt-24 min-h-screen">{children}</div>
                </div>
            </>
        );
    } else {
        redirect('/');
    }
}
