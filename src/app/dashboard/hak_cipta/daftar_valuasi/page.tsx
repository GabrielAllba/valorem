'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { db } from '../../../../../firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';
import { DataGrid, GridActionsCellItem, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import EditIcon from '@mui/icons-material/Edit';

import DeleteIcon from '@mui/icons-material/Delete';

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
    id: number | string;
    detail_permohonan: DetailPermohonan;
    pencipta: Pencipta[];
    lampiran: Lampiran;
    kuasa?: Kuasa;
    nilai_valuasi: number;
}
interface ShowData {
    id: number | string;
    tipe: string;
    nama_ciptaan: string;
    deskripsi_singkat: string;
    deskripsi: string;
    tanggal_pertama_diumumkan: string;
    negara_pertama_diumumkan: string;
    nilai_valuasi: number;
}

const MyTable = ({ rows, columns }: { rows: any[]; columns: any }) => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
};

export default function DaftarValuasiHakCipta() {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'No Valuasi', width: 220 },
        { field: 'nama_ciptaan', headerName: 'Nama Hak Cipta', width: 200 },
        { field: 'tanggal_pertama_diumumkan', headerName: 'Tanggal Pertama Diumumkan', width: 250 },
        {
            field: 'tipe',
            headerName: 'Jenis Ciptaan',
            width: 200,
        },
        {
            field: 'nilai_valuasi',
            headerName: 'Nilai Valuasi',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: (params: GridRenderCellParams<any, any>) => {
                if (params.value == 0) {
                    return (
                        <span className="flex items-center rounded-md bg-[#F8F3EE] px-2 py-1 text-xs font-medium text-[#DD9246] ring-1 ring-inset ring-[#ffe4c7]   font-poppins ">
                            menunggu valuasi
                        </span>
                    );
                } else {
                    return 'Rp.' + params.value;
                }
            },
        },
        {
            headerName: 'Aksi',
            field: 'actions',
            type: 'actions',
            width: 200,
            getActions: () => [<GridActionsCellItem icon={<EditIcon />} label="Edit" />],
        },
    ];

    const [rows, setRows] = useState<ShowData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getValuasiData = async () => {
            const querySnapshot = await getDocs(collection(db, 'valuasi_hak_cipta'));

            const rows = querySnapshot.docs.map((doc) => {
                const { detail_permohonan, pencipta, lampiran, kuasa, nilai_valuasi } = doc.data();
                const {
                    deskripsi,
                    deskripsi_singkat,
                    nama_ciptaan,
                    negara_pertama_diumumkan,
                    tanggal_pertama_diumumkan,
                    tipe,
                } = detail_permohonan;
                return {
                    id: doc.id,
                    deskripsi,
                    deskripsi_singkat,
                    nama_ciptaan,
                    negara_pertama_diumumkan,
                    tanggal_pertama_diumumkan,
                    tipe,
                    nilai_valuasi,
                };
            });
            setRows(rows);
        };
        getValuasiData();
    }, []);

    return (
        <div className="text-black bg-white shadow-lg">
            <div className=" bg-white">
                <div className="p-4 border-b">
                    <p className="font-semibold text-[#1D6363] ">Data Valuasi Hak Cipta</p>
                </div>
                <div className="p-4 overflow-auto">
                    <MyTable rows={rows} columns={columns}></MyTable>
                </div>
            </div>
        </div>
    );
}
