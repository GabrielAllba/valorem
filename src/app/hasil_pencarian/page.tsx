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

export default function HasilPencarian() {
    const [selected, setSelected] = useState(permohonan[0]);
    return (
        <section className="bg-white py-16 font-poppins">
            <div className="grid max-w-screen-xl px-8 pt-8 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:pb-8 lg:grid-cols-1">
                <div className="mr-auto place-self-center lg:col-span-1 ">
                    <div className="flex flex-wrap">
                        <div className="p-1">
                            <span className="inline-flex items-center rounded-md bg-green-50  text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-4 font-poppins px-4 py-2">
                                Total Paten yang divaluasi : 981
                            </span>
                        </div>
                        <div className="p-1">
                            <span className="inline-flex items-center rounded-md bg-green-50 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-4 font-poppins px-4 py-2 ">
                                Total Hak Cipta yang divaluasi : 900
                            </span>
                        </div>
                    </div>

                    <div className="p-1">
                        <h1 className=" mb-4  font-semibold tracking-tight leading-none md:text-2xl xl:text-4xl text-[#142123] font-poppins">
                            Hasil Pencarian terhadap <span className="text-[#1D6363]">&quot;motor&quot;</span>
                        </h1>
                        <form>
                            <div className="mb-2 mt-4 flex items-center">
                                <input
                                    type="text"
                                    id="kata_kunci"
                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                    placeholder="Kata kunci"
                                    required
                                ></input>
                                <div className="flex justify-end items-center">
                                    <button
                                        type="submit"
                                        className="text-white bg-[#1D6363] hover:bg-[#236f6f] outline-none  font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center font-poppins ml-4 px-8"
                                    >
                                        Cari
                                    </button>
                                </div>
                            </div>

                            <div className="grid w-full items-center mt-4 grid-cols-1 lg:grid-cols-5 gap-4">
                                <div className=" w-full lg:col-span-3">
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
                                <div className="flex items-center w-auto  col-span-1">
                                    <label
                                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                                        htmlFor="ripple-on"
                                        data-ripple-dark="true"
                                    >
                                        <input
                                            id="ripple-on"
                                            type="checkbox"
                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#1D6363] checked:bg-[#1D6363] scale-150"
                                        ></input>
                                        <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                            >
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                        className="mt-px font-light text-gray-700 cursor-pointer select-none"
                                        htmlFor="ripple-on"
                                    >
                                        Divaluasi
                                    </label>
                                </div>
                                <div className="flex items-center w-auto col-span-1">
                                    <label
                                        className="relative flex items-center p-3 rounded-full cursor-pointer"
                                        htmlFor="ripple-on"
                                        data-ripple-dark="true"
                                    >
                                        <input
                                            id="ripple-on"
                                            type="checkbox"
                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#1D6363] checked:bg-[#1D6363] scale-150"
                                        ></input>
                                        <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-3.5 w-3.5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                stroke="currentColor"
                                            >
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                                            </svg>
                                        </div>
                                    </label>
                                    <label
                                        className="mt-px font-light text-gray-700 cursor-pointer select-none"
                                        htmlFor="ripple-on"
                                    >
                                        Menunggu Valuasi
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid max-w-screen-xl px-8 pt-8 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:pt-8 lg:pb-8 lg:grid-cols-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {[...Array(5)].map((_, index) => (
                        <Link
                            href="/detail_page/hak_cipta"
                            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:shadow-md hover:transition-all transition-all w-full"
                            key={index}
                        >
                            <Image
                                className="object-cover w-full rounded-t-lg h-full  md:w-48 md:rounded-none md:rounded-l-lg"
                                src="/img/motor.png"
                                width={500}
                                height={500}
                                alt=""
                            />

                            <div className="flex flex-col justify-between p-4">
                                <div className="flex">
                                    <div className="p-1">
                                        <span className="flex items-center rounded-md bg-[#F8F3EE] text-xs font-medium text-[#DD9246] ring-1 ring-inset ring-[#EEE0D2] mb-4 font-poppins px-4 py-2">
                                            Menunggu Valuasi
                                        </span>
                                    </div>
                                    <div className="p-1">
                                        <span className="flex items-center rounded-md bg-[#F3F1FF] text-xs font-medium text-[#7964EF] ring-1 ring-inset ring-[#E2DDFF] mb-4 font-poppins px-4 py-2">
                                            Hak Cipta
                                        </span>
                                    </div>
                                </div>
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-black">Desain NF Motor</h5>
                                <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-8">
                                    <div>
                                        <p className="text-black font-semibold text-sm">Deskripsi Singkat</p>
                                        <p className="text-[#A5A5A5]">DESAIN NF MOTOR</p>
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm">ID Pengajuan Valuasi</p>
                                        <p className="text-[#A5A5A5] truncate">EC0020224844</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <Link
                        href="/detail_page/paten"
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:shadow-md hover:transition-all transition-all w-full"
                    >
                        <Image
                            className="object-cover w-full rounded-t-lg h-full  md:w-48 md:rounded-none md:rounded-l-lg"
                            src="/img/motor.png"
                            width={500}
                            height={500}
                            alt=""
                        />

                        <div className="flex flex-col justify-between p-4">
                            <div className="flex">
                                <div className="p-1">
                                    <span className="flex items-center rounded-md bg-[#F1FDFF] text-xs font-medium text-[#64D6EF] ring-1 ring-inset ring-[#d0f8ff] mb-4 font-poppins px-4 py-2">
                                        Divaluasi
                                    </span>
                                </div>
                                <div className="p-1">
                                    <span className="flex items-center rounded-md bg-[#F0F8EE] text-xs font-medium text-[#1D6363] ring-1 ring-inset ring-green-600/20 mb-4 font-poppins px-4 py-2">
                                        Paten
                                    </span>
                                </div>
                            </div>
                            <h5 className="mb-2 text-lg font-bold tracking-tight text-black">Desain NF Motor</h5>
                            <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-8">
                                <div>
                                    <p className="text-black font-semibold text-sm">Deskripsi Singkat</p>
                                    <p className="text-[#A5A5A5]">DESAIN NF MOTOR</p>
                                </div>
                                <div>
                                    <p className="text-black font-semibold text-sm">ID Pengajuan Valuasi</p>
                                    <p className="text-[#A5A5A5] truncate">EC0020224844</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
