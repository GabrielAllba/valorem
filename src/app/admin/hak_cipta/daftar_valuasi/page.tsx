"use client";

import { TablePagination, tablePaginationClasses as classes } from "@mui/base/TablePagination";
import { styled } from "@mui/system";
import Link from "next/link";
import * as React from "react";

const DaftarValuasiHakCiptaAdmin = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root className="bg-white text-black shadow-lg" sx={{ maxWidth: "100%", width: "100%" }}>
      <div className=" bg-white">
        <div className="border-b p-4">
          <p className="font-semibold text-[#1D6363] ">Data Valuasi Hak Cipta</p>
        </div>
        <div className="overflow-auto p-4">
          <table aria-label="custom pagination table ">
            <thead>
              <tr>
                <th>No Valuasi</th>
                <th>Nama Hak Cipta</th>
                <th>Tanggal Permohonan</th>
                <th>Jenis Ciptaan</th>
                <th>Nilai Valuasi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <tr key={row.no_valuasi}>
                  <td style={{ width: "auto" }}>{row.no_valuasi}</td>
                  <td style={{ width: "auto" }}>{row.nama_hak_cipta}</td>
                  <td align="right" style={{ width: "auto" }}>
                    {row.tanggal_permohonan}
                  </td>
                  <td align="right" style={{ width: "auto" }}>
                    {row.jenis_ciptaan}
                  </td>
                  <td align="right" style={{ width: "auto" }}>
                    Rp. {row.nilai_valuasi}
                  </td>
                  <td align="right" className="m-auto flex items-center" style={{ width: "auto" }}>
                    <Link
                      className="flex items-center rounded-md bg-green-50 px-2 py-1 font-poppins text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 "
                      href="/admin/hak_cipta/detail"
                    >
                      Lihat Detail
                    </Link>
                  </td>
                </tr>
              ))}
              {emptyRows > 0 && (
                <tr style={{ height: 41 * emptyRows }}>
                  <td aria-hidden colSpan={3} />
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <CustomTablePagination
                  colSpan={3}
                  count={rows.length}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  slotProps={{
                    select: {
                      "aria-label": "rows per page",
                    },
                    actions: {
                      showFirstButton: true,
                      showLastButton: true,
                    },
                  }}
                />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Root>
  );
};

function createData(
  no_valuasi: string,
  nama_hak_cipta: string,
  tanggal_permohonan: string,
  jenis_ciptaan: string,
  nilai_valuasi: number,
) {
  return { no_valuasi, nama_hak_cipta, tanggal_permohonan, jenis_ciptaan, nilai_valuasi };
}

const rows = [
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 5000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 5000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 5000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 5000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 5000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 5000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 4000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 3000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 2000000000),
  createData("E130812", "Motor Antik", "27 Oktober 2023", "Buku", 1000000000),
].sort((a, b) => (a.nilai_valuasi < b.nilai_valuasi ? -1 : 1));

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  }
  `,
);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

export default DaftarValuasiHakCiptaAdmin;
