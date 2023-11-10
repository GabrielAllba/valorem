"use client";

import { Listbox, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fragment, useState } from "react";
import { useRef } from "react";

interface Kewarganegaraan {
  id: number | string;
  nama: string;
}

interface Pencipta {
  id: number | string;
  nama: string;
  alamat: string;
  nomor_telepon: string;
  email: string;
  kewarganegaraan: Kewarganegaraan;
}

function createData(
  id: number | string,
  nama: string,
  alamat: string,
  nomor_telepon: string,
  email: string,
  kewarganegaraan: Kewarganegaraan,
): Pencipta {
  return {
    id,
    nama,
    alamat,
    nomor_telepon,
    email,
    kewarganegaraan,
  };
}

const rows: Pencipta[] = [
  createData(1, "John Doe", "123 Main Street", "555-555-5555", "john.doe@example.com", {
    id: "ID",
    nama: "Indonesia",
  }),
  createData(2, "Jane Smith", "456 Elm Street", "555-555-1234", "jane.smith@example.com", {
    id: "US",
    nama: "Indonesia",
  }),
  createData(3, "Alice Johnson", "789 Oak Avenue", "555-555-9876", "alice.johnson@example.com", {
    id: "CA",
    nama: "Indonesia",
  }),
  createData(4, "David Lee", "101 Pine Road", "555-555-4567", "david.lee@example.com", {
    id: "KR",
    nama: "Indonesia",
  }),
  createData(5, "Maria Garcia", "202 Cedar Lane", "555-555-7890", "maria.garcia@example.com", {
    id: "ES",
    nama: "Amerika",
  }),
];

const paten = [
  { id: 1, name: "Paten" },
  { id: 2, name: "Paten Sederhana" },
];

const kewarganegaran = [
  { id: 1, name: "Indonesia" },
  { id: 2, name: "Amerika" },
];

export default function Paten() {
  const [selected, setSelected] = useState(paten[0]);
  const [selectedOption, setSelectedOption] = useState("yes");

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [selectedKewarganegaraan, setSelectedKewarganegaraan] = useState(kewarganegaran[0].name);

  const [openInventor, setOpenInventor] = useState(false);
  const cancelButtonRefInventor = useRef(null);

  const handleRadioChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <form className="font-poppins">
        <h1 className="mb-4 font-semibold text-black">Permohonan Valuasi Paten</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="h-min rounded-md border bg-white">
            <div className="border-b p-4">
              <p className=" text-[#1D6363]">Detail Permohonan</p>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label
                  className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                  htmlFor="password"
                >
                  Tipe
                </label>

                <div>
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
                          {paten.map((item, personIdx) => (
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
              </div>

              <div className="mb-4">
                <label
                  className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                  htmlFor="kata_kunci"
                >
                  Nama Paten
                </label>
                <input
                  className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                  id="kata_kunci"
                  placeholder="Nama Paten"
                  required
                  type="text"
                ></input>
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                  htmlFor="kata_kunci"
                >
                  Deskripsi Singkat (Thumbnail)
                </label>
                <input
                  className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                  id="kata_kunci"
                  placeholder="Deskripsi Singkat (Thumbnail)"
                  required
                  type="text"
                ></input>
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                  htmlFor="kata_kunci"
                >
                  Deskripsi
                </label>
                <textarea
                  className=" block w-full resize-none rounded-lg border  border-[#DADDE2] p-2.5 font-poppins text-sm text-gray-900 outline-none"
                  id="kata_kunci"
                  placeholder="Deskripsi"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="rounded-md border bg-white">
            <div className="border-b p-4">
              <p className=" text-[#1D6363]">Data Pemilik</p>
            </div>

            <div className=" bg-white text-black">
              <div className="overflow-x-auto p-4">
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell className="font-semibold">Nama</TableCell>
                        <TableCell className="font-semibold">Nomor Telepon</TableCell>
                        <TableCell className="font-semibold">Aksi</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.nama}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell align="left">{row.nama}</TableCell>
                          <TableCell align="left">{row.nomor_telepon}</TableCell>
                          <TableCell align="left">
                            <div className="flex w-auto items-start">
                              <p className="rounded-lg bg-[#e4fbff] px-5 py-2.5  text-center font-poppins text-sm font-medium text-[#64D6EF] outline-none hover:cursor-pointer hover:bg-[#d0f3f9]">
                                <PencilIcon className="h-4 w-4"></PencilIcon>
                              </p>
                              <p className="ml-2 rounded-lg bg-[#F6E9EA] px-5 py-2.5  text-center font-poppins text-sm font-medium text-[#EF6475] outline-none hover:bg-[#f3ced1]">
                                <TrashIcon className="h-4 w-4"></TrashIcon>
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>

            <div className="flex w-full items-center px-4 pb-4">
              <button
                className="w-full rounded-lg bg-[#1D6363] px-5  py-2.5 text-center font-poppins text-sm font-medium text-white outline-none  hover:bg-[#236f6f]"
                onClick={() => setOpen(true)}
                type="submit"
              >
                Tambah Pemilik
              </button>
            </div>
          </div>
          <div className="rounded-md border bg-white">
            <div className="border-b p-4">
              <p className=" text-[#1D6363]">Data Inventor</p>
            </div>

            <div className=" bg-white text-black">
              <div className="overflow-x-auto p-4">
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell className="font-semibold">Nama</TableCell>
                        <TableCell className="font-semibold">Nomor Telepon</TableCell>
                        <TableCell className="font-semibold">Aksi</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.nama}
                          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                          <TableCell align="left">{row.nama}</TableCell>
                          <TableCell align="left">{row.nomor_telepon}</TableCell>
                          <TableCell align="left">
                            <div className="flex w-auto items-start">
                              <p className="rounded-lg bg-[#e4fbff] px-5 py-2.5  text-center font-poppins text-sm font-medium text-[#64D6EF] outline-none hover:cursor-pointer hover:bg-[#d0f3f9]">
                                <PencilIcon className="h-4 w-4"></PencilIcon>
                              </p>
                              <p className="ml-2 rounded-lg bg-[#F6E9EA] px-5 py-2.5  text-center font-poppins text-sm font-medium text-[#EF6475] outline-none hover:bg-[#f3ced1]">
                                <TrashIcon className="h-4 w-4"></TrashIcon>
                              </p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>

            <div className="flex w-full items-center px-4 pb-4">
              <p
                className="w-full rounded-lg bg-[#1D6363] px-5  py-2.5 text-center font-poppins text-sm font-medium text-white outline-none  hover:cursor-pointer hover:bg-[#236f6f]"
                onClick={() => setOpenInventor(true)}
              >
                Tambah Inventor
              </p>
            </div>
          </div>

          <div className="rounded-md border bg-white">
            <div className="border-b p-4">
              <p className=" text-[#1D6363]">Lampiran</p>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <label
                  className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                  htmlFor="kata_kunci"
                >
                  Surat Pernyataan
                </label>
                <input
                  className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                  id="kata_kunci"
                  placeholder="Nama Kuasa"
                  required
                  type="file"
                ></input>
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                  htmlFor="kata_kunci"
                >
                  Scan KTP Pemilik
                </label>
                <input
                  className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                  id="kata_kunci"
                  placeholder="Alamat Kuasa"
                  required
                  type="file"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="mt-4 flex w-full items-center">
          <button
            className="w-full rounded-lg bg-[#1D6363] px-5  py-2.5 text-center font-poppins text-sm font-medium text-white outline-none  hover:bg-[#236f6f]"
            type="submit"
          >
            Ajukan Penghitungan Valuasi Paten
          </button>
        </div>
      </form>

      <Transition.Root as={Fragment} show={open}>
        <Dialog as="div" className="relative z-40" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="border  bg-white">
                    <div className="border-b p-4">
                      <p className=" text-[#1D6363]">Data Pemilik</p>
                    </div>
                    <div className="p-4">
                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="kata_kunci"
                        >
                          Nama Pemilik
                        </label>
                        <input
                          className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                          id="kata_kunci"
                          placeholder="Nama Pemilik"
                          required
                          type="text"
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="kata_kunci"
                        >
                          Alamat
                        </label>
                        <input
                          className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                          id="kata_kunci"
                          placeholder="Alamat"
                          required
                          type="text"
                        ></input>
                      </div>

                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="kata_kunci"
                        >
                          No Telp
                        </label>
                        <input
                          className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                          id="kata_kunci"
                          placeholder="No Telp"
                          required
                          type="text"
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="kata_kunci"
                        >
                          Email
                        </label>
                        <input
                          className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                          id="kata_kunci"
                          placeholder="Email"
                          required
                          type="text"
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="password"
                        >
                          Kewarganegaraan
                        </label>

                        <div>
                          <Listbox
                            onChange={setSelectedKewarganegaraan}
                            value={selectedKewarganegaraan}
                          >
                            <div className="relative mt-1">
                              <Listbox.Button className="relative block w-full cursor-default rounded-lg border border-[#DADDE2] bg-white  p-2.5  pl-3  pr-10  text-left text-sm text-gray-900 focus:outline-none  focus-visible:ring-offset-2 sm:text-sm ">
                                <span className="block truncate text-[#555555]">
                                  {selectedKewarganegaraan}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 text-gray-400"
                                  />
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                  {kewarganegaran.map((item, personIdx) => (
                                    <Listbox.Option
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 font-poppins ${
                                          active
                                            ? "bg-[#F0F8EE] text-[#1D6363]"
                                            : "font-poppins text-black"
                                        }`
                                      }
                                      key={personIdx}
                                      value={item.name}
                                    >
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selectedKewarganegaraan == item.name
                                              ? "font-medium "
                                              : "font-normal"
                                          }`}
                                        >
                                          {item.name}
                                        </span>
                                        {selectedKewarganegaraan == item.name ? (
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1D6363]">
                                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                          </span>
                                        ) : null}
                                      </>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <button
                      className="inline-flex w-full justify-center rounded-md bg-[#1D6363] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#257575] "
                      onClick={() => setOpen(false)}
                      type="button"
                    >
                      Tambah
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root as={Fragment} show={openInventor}>
        <Dialog
          as="div"
          className="relative z-40"
          initialFocus={cancelButtonRefInventor}
          onClose={setOpenInventor}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="border  bg-white">
                    <div className="border-b p-4">
                      <p className=" text-[#1D6363]">Data Inventor</p>
                    </div>
                    <div className="p-4">
                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="kata_kunci"
                        >
                          Nama Inventor
                        </label>
                        <input
                          className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                          id="kata_kunci"
                          placeholder="Nama Inventor"
                          required
                          type="text"
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="kata_kunci"
                        >
                          Alamat
                        </label>
                        <input
                          className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                          id="kata_kunci"
                          placeholder="Alamat"
                          required
                          type="text"
                        ></input>
                      </div>

                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="kata_kunci"
                        >
                          No Telp
                        </label>
                        <input
                          className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                          id="kata_kunci"
                          placeholder="No Telp"
                          required
                          type="text"
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="kata_kunci"
                        >
                          Email
                        </label>
                        <input
                          className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
                          id="kata_kunci"
                          placeholder="Email"
                          required
                          type="text"
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
                          htmlFor="password"
                        >
                          Kewarganegaraan
                        </label>

                        <div>
                          <Listbox
                            onChange={setSelectedKewarganegaraan}
                            value={selectedKewarganegaraan}
                          >
                            <div className="relative mt-1">
                              <Listbox.Button className="relative block w-full cursor-default rounded-lg border border-[#DADDE2] bg-white  p-2.5  pl-3  pr-10  text-left text-sm text-gray-900 focus:outline-none  focus-visible:ring-offset-2 sm:text-sm ">
                                <span className="block truncate text-[#555555]">
                                  {selectedKewarganegaraan}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 text-gray-400"
                                  />
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                  {kewarganegaran.map((item, personIdx) => (
                                    <Listbox.Option
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 font-poppins ${
                                          active
                                            ? "bg-[#F0F8EE] text-[#1D6363]"
                                            : "font-poppins text-black"
                                        }`
                                      }
                                      key={personIdx}
                                      value={item.name}
                                    >
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selectedKewarganegaraan == item.name
                                              ? "font-medium "
                                              : "font-normal"
                                          }`}
                                        >
                                          {item.name}
                                        </span>
                                        {selectedKewarganegaraan == item.name ? (
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1D6363]">
                                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                          </span>
                                        ) : null}
                                      </>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <button
                      className="inline-flex w-full justify-center rounded-md bg-[#1D6363] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#257575] "
                      onClick={() => setOpenInventor(false)}
                      type="button"
                    >
                      Tambah
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
