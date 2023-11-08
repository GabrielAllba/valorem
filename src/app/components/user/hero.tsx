'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const permohonan = [
    { id: 1, name: 'Paten' },
    { id: 2, name: 'Hak Cipta' },
];

export default function Hero() {
    const [selected, setSelected] = useState(permohonan[0]);

    return (
        <section className="bg-white py-16">
            <div className="grid max-w-screen-xl px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-4  font-poppins px-4 py-2">
                        Valuasi Kekayaan Intelektual
                    </span>

                    <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#142123] font-poppins">
                        Ketahui Nilai Tersembunyi dalam Kekayaan Intelektual Anda
                    </h1>
                    <p className="max-w-2xl mb-6 font-thin lg:mb-8 md:text-lg lg:text-xl text-[#2d2d2d] font-poppins">
                        Solusi mudah, aman dan terpercaya untuk valuasi kekayaan intelektual Anda.
                    </p>
                    <a
                        href="#"
                        className="bg-[#1D6363] inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-xl font-poppins"
                    >
                        Mulai Jelajahi
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                        </svg>
                    </a>
                </div>
                <div className="mt-4 lg:mt-0 lg:col-span-5 lg:flex lg:justify-center">
                    <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-white">
                        <a href="#">
                            <Image className="rounded-t-lg" src="/img/hero.png" width={500} height={500} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-lg font-semibold tracking-tight text-black font-poppins">
                                    Yuk, telusuri data valuasi kekayaan intelektual!{' '}
                                </h5>
                            </a>

                            <form>
                                <div className="mb-2 mt-4">
                                    <label
                                        htmlFor="kata_kunci"
                                        className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                    >
                                        Kata kunci
                                    </label>
                                    <input
                                        type="text"
                                        id="kata_kunci"
                                        className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                        placeholder="Kata kunci"
                                    ></input>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                    >
                                        Tipe
                                    </label>
                                </div>
                                <div className="">
                                    <Listbox value={selected} onChange={setSelected}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white pl-3 pr-10 text-left  focus:outline-none  focus-visible:ring-offset-2  sm:text-sm  border border-[#DADDE2] text-gray-900 text-sm  block p-2.5 ">
                                                <span className="block truncate text-[#555555]">{selected.name}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                    {permohonan.map((item, personIdx) => (
                                                        <Listbox.Option
                                                            key={personIdx}
                                                            className={({ active }) =>
                                                                `relative font-poppins cursor-default select-none py-2 pl-10 pr-4 ${
                                                                    active
                                                                        ? 'bg-[#F0F8EE] text-[#1D6363]'
                                                                        : 'text-black font-poppins'
                                                                }`
                                                            }
                                                            value={item}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${
                                                                            selected ? 'font-medium ' : 'font-normal'
                                                                        }`}
                                                                    >
                                                                        {item.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1D6363]">
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>

                                <div className="flex justify-end items-center">
                                    <Link
                                        href="/hasil_pencarian"
                                        className="text-white bg-[#1D6363] hover:bg-[#236f6f] outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  mt-4 font-poppins"
                                    >
                                        Cari
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
