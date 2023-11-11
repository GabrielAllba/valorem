"use client";

import { db } from "@/firebase/clientApp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridActionsCellItem, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import * as React from "react";
import { useState, useEffect } from "react";

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
    <div style={{ width: "100%" }}>
      <DataGrid
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        rows={rows}
      />
    </div>
  );
};

const DaftarValuasiHakCipta = () => {
  const [isLoading, setIsLoading] = useState(true);
  const columns: GridColDef[] = [
    { field: "id", headerName: "No Valuasi", width: 220 },
    { field: "nama_ciptaan", headerName: "Nama Hak Cipta", width: 200 },
    { field: "tanggal_pertama_diumumkan", headerName: "Tanggal Pertama Diumumkan", width: 250 },
    {
      field: "tipe",
      headerName: "Jenis Ciptaan",
      width: 200,
    },
    {
      field: "nilai_valuasi",
      headerName: "Nilai Valuasi",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: (params: GridRenderCellParams<any, any>) => {
        if (params.value == 0) {
          return (
            <span className="flex items-center rounded-md bg-[#F8F3EE] px-2 py-1 font-poppins text-xs font-medium text-[#DD9246] ring-1 ring-inset   ring-[#ffe4c7] ">
              menunggu valuasi
            </span>
          );
        } else {
          return "Rp." + params.value;
        }
      },
    },
    {
      headerName: "Aksi",
      field: "actions",
      type: "actions",
      width: 200,
      getActions: (params) => [<GridActionsCellItem icon={<RemoveRedEyeIcon />} label="Edit" key={params.id}/>],
    },
  ];

  const [rows, setRows] = useState<ShowData[]>([]);

  useEffect(() => {
    const getValuasiData = async () => {
      
      const querySnapshot = await getDocs(collection(db, "valuasi_hak_cipta"));

      const rows = querySnapshot.docs.map((doc) => {
        const { detail_permohonan, nilai_valuasi } = doc.data();
        const {
          deskripsi,
          deskripsi_singkat,
          nama_ciptaan,
          negara_pertama_diumumkan,
          tanggal_pertama_diumumkan,
          tipe,
        } = detail_permohonan;
        return {
          key: doc.id,
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
    setIsLoading(true);
    getValuasiData();
    setIsLoading(false);
  }, []);
  
  return (
    <div className="bg-white text-black shadow-lg">
      <div className=" bg-white">
        <div className="border-b p-4">
          <p className="font-semibold text-[#1D6363] ">Data Valuasi Hak Cipta</p>
        </div>
        <div className="overflow-auto p-4">
          {isLoading && (
          <div className="w-full flex justify-center">
            <Box sx={{ display: 'flex justify-center' }}>
              <LinearProgress />
              </Box>
              </div>
              )}
          <MyTable columns={columns} rows={rows}></MyTable>
        </div>
      </div>
    </div>
  );
};

export default DaftarValuasiHakCipta;
