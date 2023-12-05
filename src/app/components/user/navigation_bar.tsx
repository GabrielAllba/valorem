'use client';

import Modal from './modal';
import { auth } from '@/firebase/clientApp';
import { Disclosure, Menu } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { US } from 'country-flag-icons/react/3x2';
import { ID } from 'country-flag-icons/react/3x2';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

interface NavigationItem {
    id: number | string;
    name: string;
    href: string;
    current: boolean;
    icon?: ReactNode;
    children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
    { id: 1, name: 'Home', href: '/', current: true, icon: '' },
    {
        id: 2,
        name: 'Permohonan',
        href: '',
        current: false,
        icon: '',
        children: [
            { id: 'permohonan-1', name: 'Hak Cipta', href: '/dashboard', current: false },
            {
                id: 'permohonan-2',
                name: 'Paten',
                href: '/dashboard/paten/hitung_valuasi',
                current: false,
            },
        ],
    },
    {
        id: 3,
        name: 'Bahasa',
        href: '',
        current: false,
        icon: '',
        children: [
            { id: 'bahasa-1', name: 'ID', href: '', current: false, icon: <ID className="h-6 w-6"></ID> },
            { id: 'bahasa-2', name: 'EN', href: '', current: false, icon: <US className="h-6 w-6"></US> },
        ],
    },
];

const NavigationBar = () => {
    const router = useRouter();

    const [language, setLanguage] = useState('ID');

    // modal sign in
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [tipe, setTipe] = useState('');

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    const openSignIn = async () => {
        const auth = getAuth();

        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            // const result = await signInWithPopup(auth, provider);
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            // const user = result.user;

            // await sendTokenToServer(user.email!);

            setTipe('Sukses');
            setMessage('Berhasil Login!');
            setOpen(true);
        } catch (error: any) {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // const email = error.email;
            setOpen(true);
        }
    };

    // const sendTokenToServer = async (email: string) => {
    //     try {
    //         const response = await axios.post('http://localhost:3000/api/authenticate', { email });
    //         console.log(response);

    //         // Cookies.set('authToken', response.data.token);
    //     } catch (error) {
    //         console.error('Error sending token to server:', error);
    //     }
    // };
    // is login

    const [login, setLogin] = useState('undefined');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log('uid', uid);
                setLogin('login');
            } else {
                console.log('user is logged out');
                setLogin('logout');
            }
        });
    }, []);

    // logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                router.push('/');
                setTipe('Sukses');
                setMessage('Berhasil Logout!');
                setOpen(true);
            })
            .catch(() => {});
    };

    const handleDashboard = () => {
        router.push('/dashboard');
    };

    return (
        <>
            <Modal message={message} onClose={() => setOpen(false)} show={open} tipe={tipe}></Modal>
            <Disclosure as="nav" className="fixed z-10 w-full border-b border-[#ECECEC] bg-white font-poppins">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between py-4">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-[#1D6363] hover:text-white focus:outline-none ">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                                        ) : (
                                            <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                    <div className="flex flex-shrink-0 items-center">
                                        <Image
                                            alt=""
                                            className="rounded-t-lg"
                                            height={50}
                                            src="/img/logo.jpeg"
                                            width={50}
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) =>
                                                !item.children ? (
                                                    <Link
                                                        aria-current={item.current ? 'page' : undefined}
                                                        className="flex items-center rounded-xl px-3 py-2   text-black hover:bg-[#1D6363] hover:text-white"
                                                        href={item.href}
                                                        key={item.id}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ) : item.name !== 'Bahasa' ? (
                                                    <Menu
                                                        as="div"
                                                        className="relative ml-3 flex items-center"
                                                        key={item.id}
                                                    >
                                                        <div>
                                                            <Menu.Button className="relative flex rounded-full bg-white focus:outline-none">
                                                                <p className=" flex items-center rounded-xl px-3 py-2  text-black hover:bg-[#1D6363] hover:text-white">
                                                                    {item.name}
                                                                    <span>
                                                                        <ChevronDownIcon className="inline-block h-6 w-6"></ChevronDownIcon>
                                                                    </span>
                                                                </p>
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 top-full mt-2 w-56  divide-y divide-gray-100 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                                {item?.children?.map((item) => (
                                                                    <Link href={item.href} key={item.id}>
                                                                        <Menu.Item key={item.id}>
                                                                            <button className=" group flex w-full items-center rounded-md px-4 py-2 text-gray-700 hover:bg-[#1D6363] hover:text-white">
                                                                                <ChevronRightIcon className="h-3 w-3"></ChevronRightIcon>
                                                                                <span className="pl-2">
                                                                                    {item.name}
                                                                                </span>
                                                                            </button>
                                                                        </Menu.Item>
                                                                    </Link>
                                                                ))}
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                ) : (
                                                    <Menu
                                                        as="div"
                                                        className="relative ml-3 flex items-center"
                                                        key={item.id}
                                                    >
                                                        <div>
                                                            <Menu.Button className="relative flex rounded-full bg-white  focus:outline-none ">
                                                                <p className=" flex items-center rounded-xl px-3 py-2  text-black hover:bg-[#1D6363] hover:text-white">
                                                                    <span className="pr-2">
                                                                        {
                                                                            item?.children?.find(
                                                                                (child) => child.name === language,
                                                                            )?.icon
                                                                        }
                                                                    </span>

                                                                    {language}
                                                                    <span className="pr-2">
                                                                        <ChevronDownIcon className="inline-block h-6 w-6"></ChevronDownIcon>
                                                                    </span>
                                                                </p>
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 top-full mt-2 w-auto divide-y divide-gray-100 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                                {item?.children?.map((item) => (
                                                                    <Menu.Item key={item.id}>
                                                                        <button
                                                                            className="group flex w-full items-center rounded-md px-4 py-2 text-gray-700 hover:bg-[#1D6363] hover:text-white"
                                                                            onClick={() => changeLanguage(item.name)}
                                                                        >
                                                                            {item.icon}
                                                                            <span className="pl-2">{item.name}</span>
                                                                        </button>
                                                                    </Menu.Item>
                                                                ))}
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                ),
                                            )}
                                            {login == 'logout' && (
                                                <>
                                                    <button
                                                        className="rounded-xl border border-[#ECECEC] bg-white px-4 py-2 text-[#1D6363] "
                                                        onClick={openSignIn}
                                                    >
                                                        Login
                                                    </button>
                                                    {/* <button className="bg-[#1D6363] hover:bg-[#236c6c] text-white py-2 px-4 rounded-xl">
                                                        Sign up
                                                    </button> */}
                                                </>
                                            )}
                                            {login == 'login' && (
                                                <>
                                                    <button
                                                        className="rounded-xl border border-[#ECECEC] bg-white px-4 py-2 text-[#1D6363] "
                                                        onClick={handleLogout}
                                                    >
                                                        Logout
                                                    </button>
                                                    <button
                                                        className="rounded-xl  bg-[#1D6363] px-4 py-2 text-white hover:bg-[#287979]"
                                                        onClick={handleDashboard}
                                                    >
                                                        Dashboard
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) =>
                                    !item.children ? (
                                        <Disclosure.Button
                                            aria-current={item.current ? 'page' : undefined}
                                            as="a"
                                            className="block rounded-xl border px-3 py-2 text-base text-black"
                                            href={item.href}
                                            key={item.id}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ) : item.name !== 'Bahasa' ? (
                                        <Menu as="div" className="relative" key={item.id}>
                                            <div>
                                                <Menu.Button className="rounded-x relative flex w-full rounded-xl border outline-none">
                                                    <p className="w-full rounded-xl  px-3 py-2 text-left text-base text-black  outline-none ">
                                                        {item.name}
                                                    </p>
                                                    <span className="m-auto pr-2">
                                                        <ChevronDownIcon className="inline-block h-6 w-6 text-black"></ChevronDownIcon>
                                                    </span>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="z-10 mt-2 w-full rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {item?.children?.map((item) => (
                                                        <div key={item.id}>
                                                            {' '}
                                                            <Link href={item.href}>
                                                                <Menu.Item>
                                                                    <button className="group flex w-full items-center rounded-md px-4 py-2 text-gray-700 hover:bg-[#1D6363] hover:text-white">
                                                                        <ChevronRightIcon className="h-3 w-3"></ChevronRightIcon>
                                                                        <span className="pl-2">{item.name}</span>
                                                                    </button>
                                                                </Menu.Item>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    ) : (
                                        <Menu as="div" className="relative" key={item.id}>
                                            <div>
                                                <Menu.Button className="rounded-x relative flex w-full rounded-xl border outline-none">
                                                    <Link
                                                        className="flex w-full items-center justify-between rounded-xl py-2 pl-3 pr-2 text-black"
                                                        href={item.href}
                                                    >
                                                        <div className="flex items-center">
                                                            <span className="pr-2">
                                                                {
                                                                    item?.children?.find(
                                                                        (child) => child.name === language,
                                                                    )?.icon
                                                                }
                                                            </span>
                                                            {language}
                                                        </div>
                                                        <span className="">
                                                            <ChevronDownIcon className="inline-block h-6 w-6"></ChevronDownIcon>
                                                        </span>
                                                    </Link>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="z-10 mt-2 w-full rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {item?.children?.map((item) => (
                                                        <div key={item.id}>
                                                            <Link href={item.href}>
                                                                <Menu.Item>
                                                                    <button className="group flex w-full items-center rounded-md px-4 py-2 text-gray-700 hover:bg-[#1D6363] hover:text-white">
                                                                        <ChevronRightIcon className="h-3 w-3"></ChevronRightIcon>
                                                                        <span className="pl-2">{item.name}</span>
                                                                    </button>
                                                                </Menu.Item>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    ),
                                )}
                                <div className="flex items-center justify-end">
                                    {login == 'logout' && (
                                        <>
                                            <button
                                                className="rounded-xl border border-[#ECECEC] bg-white px-4 py-2 text-[#1D6363] "
                                                onClick={openSignIn}
                                            >
                                                Login
                                            </button>
                                        </>
                                    )}
                                    {login == 'login' && (
                                        <div className="py-2">
                                            <button
                                                className="rounded-xl border border-[#ECECEC] bg-white px-4 py-2 text-[#1D6363] "
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </button>
                                            <button
                                                className="ml-2 rounded-xl bg-[#1D6363] px-4 py-2 text-white hover:bg-[#287979]"
                                                onClick={handleDashboard}
                                            >
                                                Dashboard
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default NavigationBar;
