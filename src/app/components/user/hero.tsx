"use client";

import { useState } from "react";

const permohonan = [
  { id: 1, name: "Paten" },
  { id: 2, name: "Hak Cipta" },
];

const Hero = () => {
  const [selected, setSelected] = useState(permohonan[0]);

  const [faqOne, setFaqOne] = useState(false);
  const [faqTwo, setFaqTwo] = useState(false);
  const [faqThree, setFaqThree] = useState(false);

  const handleOne = () => {
    setFaqOne(!faqOne);
    setFaqTwo(false);
    setFaqThree(false);
  };
  const handleTwo = () => {
    setFaqOne(false);
    setFaqTwo(!faqTwo);
    setFaqThree(false);
  };
  const handleThree = () => {
    setFaqOne(false);
    setFaqTwo(false);
    setFaqThree(!faqThree);
  };
  const listThree = [
    "Tujuan dari jasa adalah untuk memvalidasi dan menghitung nilai dari Hak Cipta dan Hak Paten.",
    "Setiap pengguna baik individu maupun badan hukum memahami proses valuasi sertifikat Hak Cipta dan Hak Paten bersifat mengikat sampai dapat dijadikan agungan di lembaga perbankan",
    "Setiap pengguna baik individu maupun badan hukum memahami bahwa ketika ada perbedaan valuasi oleh lembaga lain, maka yang berlaku adalah hasil valuasi dari Valorem.",
    "Setiap Hak Cipta dan Hak Paten yang diajukan oleh pengguna dilindungi oleh Valorem kepada pihak ketiga tanpa persetujuan dari pemegang hak tersebut.",
    "Setiap data pribadi pengguna yang dimasukan dalam sistem Harmonies Livin akan dilindungi oleh ketentuan data pribadi sesuai dengan regulasi yang ada di Indonesia.",
    "Harmonies Livin tidak bertanggung jawab jika terjadi penolakan pengajuan kredit oleh lembaga perbankan karena hasil valuasi dari penggunaan jasa Valorem.",
  ];

  return (
    <section className="bg-white py-16">
      <div className="py-4">
        <p className="bg-[#ffe1e1] py-2 text-center text-[#f35757]">
          Testing Program Lawful Dreamer FH UAJY
        </p>
      </div>
      <div className="mx-auto grid max-w-screen-xl px-8 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-6">
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
        <div className="col-span-6 mt-4 p-4 lg:mt-0 lg:flex lg:justify-center">
          <div className="h-min rounded-lg border border-gray-200 bg-white shadow">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 font-poppins text-lg font-semibold tracking-tight text-black">
                  FAQ
                </h5>
              </a>

              <form>
                <div className="mb-2 mt-4">
                  <label
                    className="flex cursor-pointer items-center justify-between font-poppins text-sm font-medium text-[#111827]"
                    htmlFor="kata_kunci"
                    onClick={handleOne}
                  >
                    <b>
                      <span>1. Apa itu jaminan fidusia?</span>
                    </b>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </label>
                  {faqOne && (
                    <div>
                      <p className="text-black">
                        pengalihan hak kepemilikan suatu benda atas dasar kepercayaan dengan
                        ketentuan bahwa benda yang hak kepemilikannya dialihkan tersebut tetap dalam
                        penguasaan pemilik benda.
                      </p>
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <label
                    className="flex cursor-pointer items-center justify-between font-poppins text-sm font-medium text-[#111827]"
                    htmlFor="password"
                    onClick={handleTwo}
                  >
                    <b>
                      <span>
                        2. Apa saja Hak Kekayaan Intelektual yang dapat dijadikan jaminan fidusia?
                      </span>
                    </b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </label>
                  {faqTwo && (
                    <div>
                      <p className="text-black">2. ⁠Hak Cipta dan Paten</p>
                    </div>
                  )}
                </div>
                <div className="mb-2">
                  <label
                    className="flex cursor-pointer items-center justify-between font-poppins text-sm font-medium text-[#111827]"
                    htmlFor="password"
                    onClick={handleThree}
                  >
                    <b>
                      <span>3. Apa saja Syarat dan Ketentuan penggunaan jasa Valorem</span>
                    </b>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </label>
                  {faqThree && (
                    <div>
                      <div className="text-black">
                        <ul className="list-disc px-4">
                          {listThree.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
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
