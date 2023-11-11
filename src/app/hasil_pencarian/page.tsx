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

const HasilPencarian = () => {
  const [selected, setSelected] = useState(permohonan[0]);
  return (
    <section className="bg-white py-16 font-poppins">
      <div className="mx-auto grid max-w-screen-xl px-8 pb-4 pt-8 lg:grid-cols-1 lg:gap-8 lg:pb-8 lg:pt-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-1 ">
          <div className="flex flex-wrap">
            <div className="p-1">
              <span className="mb-4 inline-flex items-center rounded-md  bg-green-50 px-4 py-2 font-poppins text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Total Paten yang divaluasi : 981
              </span>
            </div>
            <div className="p-1">
              <span className="mb-4 inline-flex items-center rounded-md bg-green-50 px-4 py-2 font-poppins text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ">
                Total Hak Cipta yang divaluasi : 900
              </span>
            </div>
          </div>

          <div className="p-1">
            <h1 className=" mb-4  font-poppins font-semibold leading-none tracking-tight text-[#142123] md:text-2xl xl:text-4xl">
              Hasil Pencarian terhadap <span className="text-[#1D6363]">&quot;motor&quot;</span>
            </h1>
            <form>
              <div className="mb-2 mt-4 flex items-center">
                <input
                  className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                  id="kata_kunci"
                  placeholder="Kata kunci"
                  required
                  type="text"
                ></input>
                <div className="flex items-center justify-end">
                  <button
                    className="ml-4 w-full rounded-lg bg-[#1D6363]  px-8 py-2.5 text-center font-poppins text-sm font-medium text-white outline-none hover:bg-[#236f6f] sm:w-auto"
                    type="submit"
                  >
                    Cari
                  </button>
                </div>
              </div>

              <div className="mt-4 grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-5">
                <div className=" w-full lg:col-span-3">
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
                <div className="col-span-1 flex w-auto  items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    data-ripple-dark="true"
                    htmlFor="ripple-on"
                  >
                    <input
                      className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 scale-150 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-[#1D6363] checked:bg-[#1D6363]"
                      id="ripple-on"
                      type="checkbox"
                    ></input>
                    <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                    </div>
                  </label>
                  <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                    htmlFor="ripple-on"
                  >
                    Divaluasi
                  </label>
                </div>
                <div className="col-span-1 flex w-auto items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    data-ripple-dark="true"
                    htmlFor="ripple-on"
                  >
                    <input
                      className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 scale-150 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-[#1D6363] checked:bg-[#1D6363]"
                      id="ripple-on"
                      type="checkbox"
                    ></input>
                    <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                    </div>
                  </label>
                  <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
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
      <div className="mx-auto grid max-w-screen-xl px-8 pb-4 pt-8 lg:grid-cols-1 lg:gap-8 lg:pb-8 lg:pt-8 xl:gap-0">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {[...Array(5)].map((_, index) => (
            <Link
              className="flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white shadow  transition-all hover:shadow-md hover:transition-all md:flex-row"
              href="/detail_page/hak_cipta"
              key={index}
            >
              <Image
                alt=""
                className="h-full w-full rounded-t-lg object-cover  md:w-48 md:rounded-none md:rounded-l-lg"
                height={500}
                src="/img/motor.png"
                width={500}
              />

              <div className="flex flex-col justify-between p-4">
                <div className="flex">
                  <div className="p-1">
                    <span className="mb-4 flex items-center rounded-md bg-[#F8F3EE] px-4 py-2 font-poppins text-xs font-medium text-[#DD9246] ring-1 ring-inset ring-[#EEE0D2]">
                      Menunggu Valuasi
                    </span>
                  </div>
                  <div className="p-1">
                    <span className="mb-4 flex items-center rounded-md bg-[#F3F1FF] px-4 py-2 font-poppins text-xs font-medium text-[#7964EF] ring-1 ring-inset ring-[#E2DDFF]">
                      Hak Cipta
                    </span>
                  </div>
                </div>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-black">
                  Desain NF Motor
                </h5>
                <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-black">Deskripsi Singkat</p>
                    <p className="text-[#A5A5A5]">DESAIN NF MOTOR</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">ID Pengajuan Valuasi</p>
                    <p className="truncate text-[#A5A5A5]">EC0020224844</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <Link
            className="flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white shadow  transition-all hover:shadow-md hover:transition-all md:flex-row"
            href="/detail_page/paten"
          >
            <Image
              alt=""
              className="h-full w-full rounded-t-lg object-cover  md:w-48 md:rounded-none md:rounded-l-lg"
              height={500}
              src="/img/motor.png"
              width={500}
            />

            <div className="flex flex-col justify-between p-4">
              <div className="flex">
                <div className="p-1">
                  <span className="mb-4 flex items-center rounded-md bg-[#F1FDFF] px-4 py-2 font-poppins text-xs font-medium text-[#64D6EF] ring-1 ring-inset ring-[#d0f8ff]">
                    Divaluasi
                  </span>
                </div>
                <div className="p-1">
                  <span className="mb-4 flex items-center rounded-md bg-[#F0F8EE] px-4 py-2 font-poppins text-xs font-medium text-[#1D6363] ring-1 ring-inset ring-green-600/20">
                    Paten
                  </span>
                </div>
              </div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-black">Desain NF Motor</h5>
              <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-black">Deskripsi Singkat</p>
                  <p className="text-[#A5A5A5]">DESAIN NF MOTOR</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">ID Pengajuan Valuasi</p>
                  <p className="truncate text-[#A5A5A5]">EC0020224844</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HasilPencarian;
