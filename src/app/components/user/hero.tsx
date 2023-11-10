"use client";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const permohonan = [
  { id: 1, name: "Paten" },
  { id: 2, name: "Hak Cipta" },
];

const Hero = () => {
  const [selected, setSelected] = useState(permohonan[0]);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-screen-xl px-8 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <span className="mb-4 inline-flex items-center rounded-md bg-green-50 px-4 py-2 font-poppins text-xs font-medium text-green-700  ring-1 ring-inset ring-green-600/20">
            Valuasi Kekayaan Intelektual
          </span>

          <h1 className="mb-4 max-w-2xl font-poppins text-4xl font-semibold leading-none tracking-tight text-[#142123] md:text-5xl xl:text-6xl">
            Ketahui Nilai Tersembunyi dalam Kekayaan Intelektual Anda
          </h1>
          <p className="mb-6 max-w-2xl font-poppins font-thin text-[#2d2d2d] md:text-lg lg:mb-8 lg:text-xl">
            Solusi mudah, aman dan terpercaya untuk valuasi kekayaan intelektual Anda.
          </p>
          <a
            className="mr-3 inline-flex items-center justify-center rounded-xl bg-[#1D6363] px-5 py-3 text-center font-poppins text-base font-medium text-white"
            href="#"
          >
            Mulai Jelajahi
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </a>
        </div>
        <div className="mt-4 lg:col-span-5 lg:mt-0 lg:flex lg:justify-center">
          <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
            <a href="#">
              <Image alt="" className="rounded-t-lg" height={500} src="/img/hero.png" width={500} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 font-poppins text-lg font-semibold tracking-tight text-black">
                  Yuk, telusuri data valuasi kekayaan intelektual!{" "}
                </h5>
              </a>

              <form>
                <div className="mb-2 mt-4">
                  <label
                    className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                    htmlFor="kata_kunci"
                  >
                    Kata kunci
                  </label>
                  <input
                    className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                    id="kata_kunci"
                    placeholder="Kata kunci"
                    type="text"
                  ></input>
                </div>
                <div className="">
                  <label
                    className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                    htmlFor="password"
                  >
                    Tipe
                  </label>
                </div>
                <div className="">
                  <Listbox onChange={setSelected} value={selected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative block w-full cursor-default rounded-lg border border-[#DADDE2] bg-white  p-2.5  pl-3  pr-10  text-left text-sm text-gray-900 focus:outline-none  focus-visible:ring-offset-2 sm:text-sm ">
                        <span className="block truncate text-[#555555]">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
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
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 font-poppins ${
                                  active ? "bg-[#F0F8EE] text-[#1D6363]" : "font-poppins text-black"
                                }`
                              }
                              key={personIdx}
                              value={item}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium " : "font-normal"
                                    }`}
                                  >
                                    {item.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1D6363]">
                                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
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

                <div className="flex items-center justify-end">
                  <Link
                    className="mt-4 w-full rounded-lg bg-[#1D6363]  px-5 py-2.5 text-center font-poppins text-sm font-medium text-white outline-none  hover:bg-[#236f6f] sm:w-auto"
                    href="/hasil_pencarian"
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
};

export default Hero;
