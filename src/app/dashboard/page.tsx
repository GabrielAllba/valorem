'use client';

import { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useRef } from 'react';
import { Dialog } from '@headlessui/react';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase/clientApp';

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
    kewarganegaraan: string;
}
interface DetailPermohonan {
    id: number | string;
    tipe: string;
    nama_ciptaan: string;
    deskripsi_singkat: string;
    deskripsi: string;
    tanggal_pertama_diumumkan: string;
    negara_pertama_diumumkan: string;
}

interface Kuasa {
    id: number | string;
    nama_kuasa: string;
    alamat_kuasa: string;
    email_kuasa: string;
}

interface Lampiran {
    id: number | string;
    surat_pernyataan: string;
    ktp_pencipta: string;
    surat_kuasa?: string;
}

interface ValuasiHakCipta {
    detail_permohonan: DetailPermohonan;
    pencipta: Pencipta[];
    lampiran: Lampiran;
    kuasa?: Kuasa;
    nilai_valuasi: number;
}

const hak_cipta = [
    { id: 1, nama: 'Buku' },
    { id: 2, nama: 'Lagu' },
];

const kewarganegaraan: Kewarganegaraan[] = [
    { id: 1, nama: 'Indonesia' },
    { id: 2, nama: 'Amerika' },
];

export default function Dashboard() {
    const [tipe, setTipe] = useState<string>(hak_cipta[0].nama);
    const [selectedKewarganegaraan, setSelectedKewarganegaraan] = useState(kewarganegaraan[0]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [selectedOption, setSelectedOption] = useState('yes');

    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);

    const handleRadioChange = (e: any) => {
        setSelectedOption(e.target.value);

        setKuasa({
            id: '',
            nama_kuasa: '',
            alamat_kuasa: '',
            email_kuasa: '',
        });
    };

    const handleOpenTambahPencipta = (e: any) => {
        e.preventDefault();
        setOpen(true);
    };

    // add item to database
    const [detailPermohonan, setDetailPermohonan] = useState<DetailPermohonan>({
        id: '',
        tipe: '',
        nama_ciptaan: '',
        deskripsi_singkat: '',
        deskripsi: '',
        tanggal_pertama_diumumkan: '',
        negara_pertama_diumumkan: '',
    });
    const [p, setP] = useState<Pencipta>({
        id: '',
        nama: '',
        alamat: '',
        nomor_telepon: '',
        email: '',
        kewarganegaraan: '',
    });
    const [pencipta, setPencipta] = useState<Pencipta[]>([]);

    const [kuasa, setKuasa] = useState<Kuasa>({
        id: '',
        nama_kuasa: '',
        alamat_kuasa: '',
        email_kuasa: '',
    });

    const [lampiran, setLampiran] = useState<Lampiran>({
        id: '',
        surat_pernyataan: '',
        ktp_pencipta: '',
        surat_kuasa: '',
    });

    const [valuasiHakCipta, setValuasiHakCipta] = useState<ValuasiHakCipta>({
        detail_permohonan: detailPermohonan,
        pencipta: pencipta,
        lampiran: lampiran,
        kuasa: kuasa,
        nilai_valuasi: 0,
    });

    const addItem = async (e: any) => {
        e.preventDefault();

        const { detail_permohonan, kuasa, lampiran, pencipta, nilai_valuasi } = valuasiHakCipta;

        setIsSubmitting(true);
        await addDoc(collection(db, 'valuasi_hak_cipta'), {
            detail_permohonan,
            kuasa,
            lampiran,
            pencipta,
            nilai_valuasi,
        });
        setIsSubmitting(false);
    };
    useEffect(() => {
        setDetailPermohonan((prevDetailPermohonan) => ({
            ...prevDetailPermohonan,
            tipe: tipe,
        }));
    }, [tipe]);

    useEffect(() => {
        setP((prev) => ({
            ...prev,
            kewarganegaraan: selectedKewarganegaraan.nama,
        }));
    }, [selectedKewarganegaraan]);

    const handleSubmitTambahPencipta = () => {
        setOpen(false);
        setPencipta((prev) => [...prev, p]);

        // finish
        setP({ id: '', nama: '', alamat: '', nomor_telepon: '', email: '', kewarganegaraan: '' });
    };

    useEffect(() => {
        setValuasiHakCipta({
            detail_permohonan: detailPermohonan,
            pencipta: pencipta,
            lampiran: lampiran,
            kuasa: kuasa,
            nilai_valuasi: 0,
        });
    }, [detailPermohonan, pencipta, lampiran, kuasa]);

    console.log(valuasiHakCipta);

    return (
        <>
            <form className="font-poppins">
                <h1 className="text-black font-semibold mb-4">Permohonan Valuasi Hak Cipta</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white rounded-md border">
                        <div className="p-4 border-b">
                            <p className=" text-[#1D6363]">Detail Permohonan</p>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                >
                                    Tipe
                                </label>

                                <div>
                                    <Listbox value={tipe} onChange={setTipe}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white pl-3 pr-10 text-left  focus:outline-none  focus-visible:ring-offset-2  sm:text-sm  border border-[#DADDE2] text-gray-900 text-sm  block p-2.5 ">
                                                <span className="block truncate text-[#555555]">{tipe}</span>
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
                                                    {hak_cipta.map((item, personIdx) => (
                                                        <Listbox.Option
                                                            key={personIdx}
                                                            className={({ active }) =>
                                                                `relative font-poppins cursor-default select-none py-2 pl-10 pr-4 ${
                                                                    active
                                                                        ? 'bg-[#F0F8EE] text-[#1D6363]'
                                                                        : 'text-black font-poppins'
                                                                }`
                                                            }
                                                            value={item.nama}
                                                        >
                                                            <>
                                                                <span
                                                                    className={`block truncate ${
                                                                        tipe == item.nama
                                                                            ? 'font-medium '
                                                                            : 'font-normal'
                                                                    }`}
                                                                >
                                                                    {item.nama}
                                                                </span>
                                                                {tipe == item.nama ? (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1D6363]">
                                                                        <CheckIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
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

                            <div className="mb-4">
                                <label
                                    htmlFor="nama_ciptaan"
                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                >
                                    Nama Ciptaan
                                </label>
                                <input
                                    type="text"
                                    value={detailPermohonan?.nama_ciptaan}
                                    onChange={(e) =>
                                        setDetailPermohonan({
                                            ...detailPermohonan!,
                                            nama_ciptaan: e.target.value,
                                        })
                                    }
                                    id="nama_ciptaan"
                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                    placeholder="Nama Ciptaan"
                                    required
                                ></input>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="deskripsi_singkat"
                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                >
                                    Deskripsi Singkat (Thumbnail)
                                </label>
                                <input
                                    type="text"
                                    id="deskripsi_singkat"
                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                    placeholder="Deskripsi Singkat (Thumbnail)"
                                    required
                                    value={detailPermohonan?.deskripsi_singkat}
                                    onChange={(e) =>
                                        setDetailPermohonan({
                                            ...detailPermohonan!,
                                            deskripsi_singkat: e.target.value,
                                        })
                                    }
                                ></input>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="deskripsi"
                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                >
                                    Deskripsi
                                </label>
                                <textarea
                                    id="deskripsi"
                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins resize-none"
                                    placeholder="Deskripsi"
                                    required
                                    value={detailPermohonan?.deskripsi}
                                    onChange={(e) =>
                                        setDetailPermohonan({
                                            ...detailPermohonan!,
                                            deskripsi: e.target.value,
                                        })
                                    }
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="tanggal_pertama_diumumkan"
                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                >
                                    Tanggal Pertama Diumumkan
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="date"
                                        className="border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5 "
                                        placeholder="Select date"
                                        value={detailPermohonan?.tanggal_pertama_diumumkan}
                                        onChange={(e) =>
                                            setDetailPermohonan({
                                                ...detailPermohonan!,
                                                tanggal_pertama_diumumkan: e.target.value,
                                            })
                                        }
                                    ></input>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="negara_pertama_diumumkan"
                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                >
                                    Negara Pertama Diumumkan
                                </label>
                                <input
                                    type="text"
                                    id="negara_pertama_diumumkan"
                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                    placeholder="Negara Pertama Diumumkan"
                                    required
                                    value={detailPermohonan?.negara_pertama_diumumkan}
                                    onChange={(e) =>
                                        setDetailPermohonan({
                                            ...detailPermohonan!,
                                            negara_pertama_diumumkan: e.target.value,
                                        })
                                    }
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-md border">
                        <div className="p-4 border-b">
                            <p className=" text-[#1D6363]">Data Pencipta</p>
                        </div>

                        <div className=" bg-white text-black">
                            <div className="p-4 overflow-x-auto">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className="font-semibold">Nama</TableCell>
                                                <TableCell className="font-semibold">Nomor Telepon</TableCell>
                                                <TableCell className="font-semibold">Aksi</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {pencipta.length !== 0 &&
                                                pencipta.map((row) => (
                                                    <TableRow
                                                        key={row.nama}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell align="left">{row.nama}</TableCell>
                                                        <TableCell align="left">{row.nomor_telepon}</TableCell>
                                                        <TableCell align="left">
                                                            <div className="flex items-start w-auto">
                                                                <p className="text-[#64D6EF] bg-[#e4fbff] hover:bg-[#d0f3f9] outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center font-poppins hover:cursor-pointer">
                                                                    <PencilIcon className="h-4 w-4"></PencilIcon>
                                                                </p>
                                                                <p className="ml-2 text-[#EF6475] bg-[#F6E9EA] hover:bg-[#f3ced1] outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center font-poppins">
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

                        <div className="flex items-center px-4 w-full">
                            <button
                                type="submit"
                                className="text-white bg-[#1D6363] hover:bg-[#236f6f] outline-none  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center  font-poppins"
                                onClick={handleOpenTambahPencipta}
                            >
                                Tambah Pencipta
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-md border h-min">
                        <div className="p-4 border-b">
                            <p className=" text-[#1D6363]">Data Kuasa</p>
                        </div>
                        <div className="p-4">
                            <fieldset>
                                <legend className="leading-6 text-gray-900">Melalui Kuasa</legend>
                                <div className="mt-2 space-y-6">
                                    <div className="flex">
                                        <div className="flex items-center">
                                            <input
                                                id="push-everything"
                                                name="melalui-kuasa"
                                                type="radio"
                                                value="yes"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 mr-2"
                                                checked={selectedOption === 'yes'}
                                                onChange={handleRadioChange}
                                            />
                                            <label
                                                htmlFor="push-everything"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Yes
                                            </label>
                                        </div>
                                        <div className="flex items-center pl-4">
                                            <input
                                                id="push-email"
                                                name="melalui-kuasa"
                                                type="radio"
                                                value="no"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 mr-2"
                                                checked={selectedOption === 'no'}
                                                onChange={handleRadioChange}
                                            />
                                            <label
                                                htmlFor="push-email"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        {selectedOption === 'yes' && (
                            <div className="p-4">
                                <div className="mb-4">
                                    <label
                                        htmlFor="nama-kuasa"
                                        className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                    >
                                        Nama Kuasa
                                    </label>
                                    <input
                                        type="text"
                                        id="nama-kuasa"
                                        className="border border-[#DADDE2] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none font-poppins"
                                        placeholder="Nama Kuasa"
                                        required
                                        value={kuasa?.nama_kuasa}
                                        onChange={(e) =>
                                            setKuasa({
                                                ...kuasa!,
                                                nama_kuasa: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="alamat-kuasa"
                                        className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                    >
                                        Alamat Kuasa
                                    </label>
                                    <input
                                        type="text"
                                        id="alamat-kuasa"
                                        className="border border-[#DADDE2] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none font-poppins"
                                        placeholder="Alamat Kuasa"
                                        required
                                        value={kuasa?.alamat_kuasa}
                                        onChange={(e) =>
                                            setKuasa({
                                                ...kuasa!,
                                                alamat_kuasa: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email-kuasa"
                                        className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                    >
                                        Email Kuasa
                                    </label>
                                    <input
                                        type="text"
                                        id="email-kuasa"
                                        className="border border-[#DADDE2] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none font-poppins"
                                        placeholder="Email Kuasa"
                                        required
                                        value={kuasa?.email_kuasa}
                                        onChange={(e) =>
                                            setKuasa({
                                                ...kuasa!,
                                                email_kuasa: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-md border">
                        <div className="p-4 border-b">
                            <p className=" text-[#1D6363]">Lampiran</p>
                        </div>

                        <div className="p-4">
                            <div className="mb-4">
                                <label
                                    htmlFor="surat_pernyatan"
                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                >
                                    Surat Pernyataan
                                </label>
                                <input
                                    type="file"
                                    id="surat_pernyataan"
                                    className="border border-[#DADDE2] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none font-poppins"
                                    placeholder="Nama Kuasa"
                                    required
                                    onChange={(e) => {
                                        const selectedFile = e.target.files && e.target.files[0];
                                        if (selectedFile) {
                                            setLampiran({
                                                ...lampiran,
                                                surat_pernyataan: selectedFile.name,
                                            });
                                        }
                                    }}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="ktp_pencipta"
                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                >
                                    KTP Pencipta
                                </label>
                                <input
                                    type="file"
                                    id="ktp_pencipta"
                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                    placeholder="KTP Pencipta"
                                    required
                                    onChange={(e) => {
                                        const selectedFile = e.target.files && e.target.files[0];
                                        if (selectedFile) {
                                            setLampiran({
                                                ...lampiran,
                                                ktp_pencipta: selectedFile.name,
                                            });
                                        }
                                    }}
                                ></input>
                            </div>
                            {selectedOption === 'yes' && (
                                <div className="mb-4">
                                    <label
                                        htmlFor="surat_kuasa"
                                        className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                    >
                                        Surat Kuasa <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="surat_kuasa"
                                        className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins "
                                        placeholder="Surat Kuasa"
                                        required
                                        onChange={(e) => {
                                            const selectedFile = e.target.files && e.target.files[0];
                                            if (selectedFile) {
                                                setLampiran({
                                                    ...lampiran,
                                                    surat_kuasa: selectedFile.name,
                                                });
                                            }
                                        }}
                                    ></input>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <hr className="mt-4" />
                <div className="flex items-center w-full mt-4">
                    <button
                        onClick={addItem}
                        type="submit"
                        className="text-white bg-[#1D6363] hover:bg-[#236f6f] outline-none  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center  font-poppins flex justify-center"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    className="w-6 mr-2 text-gray-400 animate-spin  fill-white"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                            </div>
                        ) : (
                            'Ajukan Penghitungan Valuasi Hak Cipta'
                        )}
                    </button>
                </div>
            </form>

            <Transition.Root show={open} as={Fragment}>
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

                    <form className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                                    <div className="bg-white  border">
                                        <div className="p-4 border-b">
                                            <p className=" text-[#1D6363]">Data Pencipta</p>
                                        </div>
                                        <div className="p-4">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="nama_pencipta"
                                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                                >
                                                    Nama Pencipta
                                                </label>
                                                <input
                                                    type="text"
                                                    id="nama_pencipta"
                                                    className="border border-[#DADDE2] text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none font-poppins"
                                                    placeholder="Nama Pencipta"
                                                    required
                                                    onChange={(e) =>
                                                        setP((prevPencipta) => ({
                                                            ...prevPencipta,
                                                            nama: e.target.value,
                                                        }))
                                                    }
                                                ></input>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="alamat"
                                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                                >
                                                    Alamat
                                                </label>
                                                <input
                                                    type="text"
                                                    id="alamat"
                                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                                    placeholder="Alamat"
                                                    required
                                                    onChange={(e) =>
                                                        setP((prevPencipta) => ({
                                                            ...prevPencipta,
                                                            alamat: e.target.value,
                                                        }))
                                                    }
                                                ></input>
                                            </div>

                                            <div className="mb-4">
                                                <label
                                                    htmlFor="nomor_telepon"
                                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                                >
                                                    No Telp
                                                </label>
                                                <input
                                                    type="text"
                                                    id="nomor_telepon"
                                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                                    placeholder="No Telp"
                                                    required
                                                    onChange={(e) =>
                                                        setP((prevPencipta) => ({
                                                            ...prevPencipta,
                                                            nomor_telepon: e.target.value,
                                                        }))
                                                    }
                                                ></input>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    className=" border border-[#DADDE2] text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none font-poppins"
                                                    placeholder="Email"
                                                    required
                                                    onChange={(e) =>
                                                        setP((prevPencipta) => ({
                                                            ...prevPencipta,
                                                            email: e.target.value,
                                                        }))
                                                    }
                                                ></input>
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="password"
                                                    className="block mb-2 text-sm font-medium text-[#111827] font-poppins"
                                                >
                                                    Kewarganegaraan
                                                </label>

                                                <div>
                                                    <Listbox
                                                        value={selectedKewarganegaraan}
                                                        onChange={setSelectedKewarganegaraan}
                                                    >
                                                        <div className="relative mt-1">
                                                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white pl-3 pr-10 text-left  focus:outline-none  focus-visible:ring-offset-2  sm:text-sm  border border-[#DADDE2] text-gray-900 text-sm  block p-2.5 ">
                                                                <span className="block truncate text-[#555555]">
                                                                    {selectedKewarganegaraan.nama}
                                                                </span>
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
                                                                <Listbox.Options className="mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                                    {kewarganegaraan.map((item, personIdx) => (
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
                                                                            <>
                                                                                <span
                                                                                    className={`block truncate ${
                                                                                        selectedKewarganegaraan == item
                                                                                            ? 'font-medium '
                                                                                            : 'font-normal'
                                                                                    }`}
                                                                                >
                                                                                    {item.nama}
                                                                                </span>
                                                                                {selectedKewarganegaraan == item ? (
                                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#1D6363]">
                                                                                        <CheckIcon
                                                                                            className="h-5 w-5"
                                                                                            aria-hidden="true"
                                                                                        />
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
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-[#1D6363] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#257575] "
                                            onClick={handleSubmitTambahPencipta}
                                        >
                                            Tambah
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </form>
                </Dialog>
            </Transition.Root>
        </>
    );
}
