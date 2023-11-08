'use client';

import { Disclosure } from '@headlessui/react';
import { StarIcon, DocumentIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar({ sidebar, toggleSidebar }: { sidebar: string; toggleSidebar: () => void }) {
    const [mobile, setMobile] = useState(false);
    const updateMobile = () => {
        if (window.innerWidth < 1024) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    useEffect(() => {
        updateMobile();
        window.addEventListener('resize', updateMobile);

        return () => {
            window.removeEventListener('resize', updateMobile);
        };
    }, []);

    return (
        <>
            <Disclosure
                as="nav"
                className="fixed bg-white w-full border-b border-[#F3F1FF] font-poppins z-10 transition-all"
            >
                {({ open }) => (
                    <>
                        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between py-4">
                                <div className="flex flex-1 items-center justify-between">
                                    <div className="flex flex-shrink-0 items-center">
                                        <h1 className="text-[#1D6363] font-bold">valorem</h1>
                                    </div>
                                    <div className="flex">
                                        <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full">
                                            <svg
                                                className="absolute w-10 h-10 text-gray-400 -left-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                            </svg>
                                        </div>

                                        <div className="space-x-4 items-center hidden md:flex">
                                            <p className="text-black pl-3">gabriel@gmail.com</p>
                                        </div>
                                        <button
                                            data-drawer-target="separator-sidebar"
                                            data-drawer-toggle="separator-sidebar"
                                            aria-controls="separator-sidebar"
                                            type="button"
                                            className="flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                            onClick={mobile ? toggleSidebar : undefined}
                                        >
                                            <span className="sr-only">Open sidebar</span>
                                            <svg
                                                className="w-6 h-6"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <div className="flex items-center justify-end">
                                    <button className="bg-[#1D6363] hover:bg-[#236c6c] text-white py-2 px-4 rounded-xl ml-2">
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <div className="z-40">
                <div className="font-poppins">
                    <aside
                        id="separator-sidebar"
                        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform border-r border-[#F3F1FF] ${
                            sidebar === 'active' ? 'translate-x-0' : '-translate-x-full'
                        }`}
                        aria-label="Sidebar"
                    >
                        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                            <ul className="space-y-2 font-medium h-full">
                                <div className="flex justify-between flex-col h-full">
                                    <div>
                                        <li className="mb-8">
                                            <Link
                                                href="/"
                                                className="flex items-center  group"
                                                onClick={mobile ? toggleSidebar : undefined}
                                            >
                                                <span className="ml-3 text-[#1D6363] font-semibold">Valorem</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <p className="text-black font-medium  p-4 py-2">Hak Cipta</p>
                                        </li>
                                        <li>
                                            <Link
                                                href="/dashboard"
                                                onClick={mobile ? toggleSidebar : undefined}
                                                className="flex items-center px-4 py-2 text-[#7D848C] rounded-lg group hover:bg-[#F0F8EE] hover:text-[#1D6363] "
                                            >
                                                <StarIcon className="h-4 w-4"></StarIcon>
                                                <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                                                    Hitung Valuasi
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/dashboard/hak_cipta/daftar_valuasi"
                                                className="flex items-center px-4 py-2 text-[#7D848C] rounded-lg group hover:bg-[#F0F8EE] hover:text-[#1D6363] "
                                                onClick={mobile ? toggleSidebar : undefined}
                                            >
                                                <DocumentIcon className="h-4 w-4"></DocumentIcon>
                                                <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                                                    Daftar valuasi
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <p className="text-black font-medium  p-4 py-2">Paten</p>
                                        </li>
                                        <li>
                                            <Link
                                                href="/dashboard/paten/hitung_valuasi"
                                                onClick={mobile ? toggleSidebar : undefined}
                                                className="flex items-center px-4 py-2 text-[#7D848C] rounded-lg group hover:bg-[#F0F8EE] hover:text-[#1D6363] "
                                            >
                                                <StarIcon className="h-4 w-4"></StarIcon>
                                                <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                                                    Hitung valuasi
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/dashboard/paten/daftar_valuasi"
                                                onClick={mobile ? toggleSidebar : undefined}
                                                className="flex items-center px-4 py-2 text-[#7D848C] rounded-lg group hover:bg-[#F0F8EE] hover:text-[#1D6363] "
                                            >
                                                <DocumentIcon className="h-4 w-4"></DocumentIcon>
                                                <span className="flex-1 ml-3 whitespace-nowrap text-sm">
                                                    Daftar valuasi
                                                </span>
                                            </Link>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <Link
                                                onClick={mobile ? toggleSidebar : undefined}
                                                href="#"
                                                className="flex items-center px-4 py-2 text-[#7D848C] rounded-lg group hover:bg-[#F0F8EE] hover:text-[#1D6363] "
                                            >
                                                <svg
                                                    className="flex-shrink-0 w-5 h-5 transition duration-75 "
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 18 18"
                                                >
                                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                                </svg>
                                                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
