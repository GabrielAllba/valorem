'use client';

import { useState, useEffect } from 'react';

import NavBar from '../components/admin/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [sidebar, setSidebar] = useState('active');

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
