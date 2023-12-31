import Image from "next/image";

const HakCipta = () => {
  return (
    <>
      <section className="bg-white py-16 font-poppins">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 pb-4 pt-8 lg:gap-8 lg:pb-8 lg:pt-16 xl:gap-0">
          <div>
            <div className="w-64 p-4">
              <p className="block text-sm font-medium text-gray-700">
                <b>Detail Valuasi</b>
              </p>
              <p className="block text-sm font-medium text-gray-700">Desain NF Motor</p>
            </div>
            <div className="mt-4 bg-white">
              <div className="p-8 pb-4 pt-4">
                <div className="bg-white">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div className="grid grid-cols-1 grid-rows-1 ">
                      <Image
                        alt=""
                        className="rounded-lg bg-gray-100"
                        height={1000}
                        src="/img/motor.png"
                        width={1000}
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Desain NF Motor
                      </h2>
                      <div className="mt-2">
                        <span className="mb-2 mr-2 inline-block rounded-full bg-[#F1FDFF]  px-3 py-1 text-base text-[#64D6EF]">
                          divaluasi
                        </span>
                      </div>
                      <p className="mt-4 text-gray-500">Nilai Valuasi</p>
                      <p className="text-2xl text-[#1D6363] md:text-5xl">
                        <b>Rp. 5.000.000.000</b>
                      </p>
                      <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                          <dt className="font-medium text-gray-900">Nama Ciptaan</dt>
                          <dd className="mt-2 text-sm text-gray-500">Desain NF Motor</dd>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                          <dt className="font-medium text-gray-900">Nomor Valuasi</dt>
                          <dd className="mt-2 text-sm text-gray-500">8123J1023KO12</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <dt className="font-medium text-gray-900">Tanggal Permohonan</dt>
                          <dd className="mt-2 text-sm text-gray-500">27 Oktober 2023</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <dt className="font-medium text-gray-900">Jenis Hak Cipta</dt>
                          <dd className="mt-2 text-sm text-gray-500">Buku</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <dt className="font-medium text-gray-900">Tanggal Pertama Diumumkan</dt>
                          <dd className="mt-2 text-sm text-gray-500">17 Juli 2022</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <dt className="font-medium text-gray-900">Negara Pertama Diumumkan</dt>
                          <dd className="mt-2 text-sm text-gray-500">Indonesia</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white">
              <div className="border-b border-[#EBE9F6] p-8 pb-4 pt-4">
                <div className="bg-white">
                  <div>
                    <div className="px-4 sm:px-0">
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Informasi Valuasi
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                        Data lebih lanjut mengenai hak cipta.
                      </p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                      <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Deskripsi Singkat
                          </dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Desain NF Motor
                          </dd>
                        </div>

                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Deskripsi</dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
                            cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit
                            id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Jenis Hak Cipta
                          </dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Buku
                          </dd>
                        </div>

                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Pemegang</dt>
                          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <div className="bg-white">
                              <div className=" bg-white">
                                <div className="overflow-x-auto p-8 pt-2">
                                  <table className="mb-4 w-full border-collapse border border-gray-300">
                                    <thead>
                                      <tr>
                                        <th className="border p-3 text-left ">Nama</th>
                                        <th className="border p-3 text-left  ">Alamat</th>
                                        <th className="border  p-3 text-left ">Kewarganegaraan</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="border border-gray-300 p-3">
                                          Gabriel Allba
                                        </td>
                                        <td className="border border-gray-300 p-3">
                                          Jl. Bumi Indah RT. 003 RW.009, Sukabumi Utara, Kebon
                                        </td>
                                        <td className="border border-gray-300 p-3">Indonesia</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">Pencipta</dt>
                          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <div className="bg-white">
                              <div className=" bg-white">
                                <div className="overflow-x-auto p-8 pt-2">
                                  <table className="mb-4 w-full border-collapse border border-gray-300">
                                    <thead>
                                      <tr>
                                        <th className="border p-3 text-left ">Nama</th>
                                        <th className="border p-3 text-left  ">Alamat</th>
                                        <th className="border  p-3 text-left ">Kewarganegaraan</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="border border-gray-300 p-3">
                                          Gabriel Allba
                                        </td>
                                        <td className="border border-gray-300 p-3">
                                          Jl. Bumi Indah RT. 003 RW.009, Sukabumi Utara, Kebon
                                        </td>
                                        <td className="border border-gray-300 p-3">Indonesia</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Surat Pernyataan
                          </dt>
                          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul
                              className="divide-y divide-gray-100 rounded-md border border-gray-200"
                              role="list"
                            >
                              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                <div className="flex w-0 flex-1 items-center">
                                  <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" />
                                  </svg>
                                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">lampiran.pdf</span>
                                    <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                  </div>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    className="font-medium text-[#1D6363] hover:text-[#287c7c]"
                                    href="#"
                                  >
                                    Download
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HakCipta;
