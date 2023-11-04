'use client';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { US } from 'country-flag-icons/react/3x2';
import { ID } from 'country-flag-icons/react/3x2';
import { useState } from 'react';

interface NavigationItem {
    id: number | string;
    name: string;
    href: string;
    current: boolean;
    icon?: React.ReactNode;
    children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
    { id: 1, name: 'Home', href: '#', current: true, icon: '' },
    {
        id: 2,
        name: 'Permohonan',
        href: '',
        current: false,
        icon: '',
        children: [
            { id: 'permohonan-1', name: 'Paten', href: '', current: false },
            { id: 'permohonan-2', name: 'Hak Cipta', href: '', current: false },
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

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function NavigationBar() {
    const [language, setLanguage] = useState('ID');

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    return (
        <Disclosure as="nav" className="bg-white fixed w-full border-b border-[#ECECEC] font-poppins z-10">
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
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className="text-[#1D6363] font-bold">valorem</h1>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) =>
                                            !item.children ? (
                                                <a
                                                    key={item.id}
                                                    href={item.href}
                                                    className="hover:bg-[#1D6363] hover:text-white rounded-xl px-3 py-2   text-black flex items-center"
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ) : item.name !== 'Bahasa' ? (
                                                <Menu
                                                    as="div"
                                                    className="relative ml-3 flex items-center"
                                                    key={item.id}
                                                >
                                                    <div>
                                                        <Menu.Button className="relative flex rounded-full bg-white focus:outline-none">
                                                            <a className=" hover:bg-[#1D6363] hover:text-white rounded-xl px-3 py-2  text-black flex items-center">
                                                                {item.name}
                                                                <span>
                                                                    <ChevronDownIcon className="inline-block h-6 w-6"></ChevronDownIcon>
                                                                </span>
                                                            </a>
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
                                                        <Menu.Items className="absolute right-0 mt-2 w-56 top-full  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-2">
                                                            {item?.children?.map((item) => (
                                                                <Menu.Item key={item.id}>
                                                                    <button className=" text-gray-700 hover:bg-[#1D6363] group flex w-full items-center rounded-md px-4 py-2 hover:text-white">
                                                                        <ChevronRightIcon className="w-3 h-3"></ChevronRightIcon>
                                                                        <span className="pl-2">{item.name}</span>
                                                                    </button>
                                                                </Menu.Item>
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
                                                            <a className=" hover:bg-[#1D6363] hover:text-white rounded-xl px-3 py-2  text-black flex items-center">
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
                                                            </a>
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
                                                        <Menu.Items className="absolute right-0 w-auto divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-2 top-full mt-2">
                                                            {item?.children?.map((item) => (
                                                                <Menu.Item key={item.id}>
                                                                    <button
                                                                        className="text-gray-700 hover:bg-[#1D6363] group flex w-full items-center rounded-md px-4 py-2 hover:text-white"
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
                                        <button className="bg-white text-[#1D6363] py-2 px-4 rounded-xl border border-[#ECECEC] ">
                                            Login
                                        </button>
                                        <button className="bg-[#1D6363] hover:bg-[#236c6c] text-white py-2 px-4 rounded-xl">
                                            Sign up
                                        </button>
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
                                        key={item.id}
                                        as="a"
                                        href={item.href}
                                        className="text-black block rounded-xl px-3 py-2 text-base border"
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ) : item.name !== 'Bahasa' ? (
                                    <Menu as="div" className="relative" key={item.id}>
                                        <div>
                                            <Menu.Button className="relative flex rounded-x outline-none w-full border rounded-xl">
                                                <a className="text-left text-black  outline-none rounded-xl px-3 py-2 text-base  w-full ">
                                                    {item.name}
                                                </a>
                                                <span className="pr-2 m-auto">
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
                                            <Menu.Items className=" z-10 mt-2 w-full rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {item?.children?.map((item) => (
                                                    <Menu.Item key={item.id}>
                                                        <button className=" text-gray-700 hover:bg-[#1D6363] group flex w-full items-center rounded-md px-4 py-2 hover:text-white">
                                                            <ChevronRightIcon className="w-3 h-3"></ChevronRightIcon>
                                                            <span className="pl-2">{item.name}</span>
                                                        </button>
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                ) : (
                                    <Menu as="div" className="relative" key={item.id}>
                                        <div>
                                            <Menu.Button className="relative flex rounded-x outline-none w-full border rounded-xl">
                                                <a className="rounded-xl pl-3 pr-2 py-2 text-black flex items-center justify-between w-full">
                                                    <div className="flex items-center">
                                                        <span className="pr-2">
                                                            {
                                                                item?.children?.find((child) => child.name === language)
                                                                    ?.icon
                                                            }
                                                        </span>
                                                        {language}
                                                    </div>
                                                    <span className="">
                                                        <ChevronDownIcon className="inline-block h-6 w-6"></ChevronDownIcon>
                                                    </span>
                                                </a>
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
                                            <Menu.Items className=" z-10 mt-2 w-full rounded-xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {item?.children?.map((item) => (
                                                    <Menu.Item key={item.id}>
                                                        <button
                                                            className="  text-gray-700 hover:bg-[#1D6363] group flex w-full items-center rounded-md px-4 py-2 hover:text-white"
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
                            <div className="flex items-center justify-end">
                                <button className="bg-white text-[#1D6363] py-2 px-4 rounded-xl border border-[#ECECEC] ">
                                    Login
                                </button>
                                <button className="bg-[#1D6363] hover:bg-[#236c6c] text-white py-2 px-4 rounded-xl ml-2">
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
