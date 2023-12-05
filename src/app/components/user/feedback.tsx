"use client";

import { db } from "@/firebase/clientApp";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    nama: "",
    instansi: "",
    kontak: "",
    pengalaman_layanan: "",
    usulan: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const successNotify = () => {
    toast.success("Berhasil Submit", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  };

  const addItem = async () => {
    await addDoc(collection(db, "feedback"), formData);
    setFormData({
      nama: "",
      instansi: "",
      kontak: "",
      pengalaman_layanan: "",
      usulan: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    await addItem();
    successNotify();
  };

  return (
    <section className="bg-white py-16">
      <ToastContainer />

      <div className="mx-auto grid max-w-screen-xl px-8 pt-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="m-auto text-center lg:col-span-12">
          <h1 className="mb-4 font-poppins text-4xl font-semibold leading-none tracking-tight text-[#142123] md:text-5xl xl:text-6xl">
            Feedback
          </h1>
          <p className="mb-6 font-poppins font-thin text-[#2d2d2d] md:text-lg lg:mb-8 lg:text-xl">
            Yuk, berikan masukan kamu agar kami berkembang menjadi lebih baik!
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid max-w-screen-xl gap-8 px-8 lg:grid-cols-2 lg:pb-16"
      >
        <div className="mb-2 mt-4">
          <label
            className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
            htmlFor="nama"
          >
            Nama
          </label>
          <input
            required
            onChange={handleChange}
            name="nama"
            className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
            id="nama"
            value={formData.nama}
            placeholder="Nama"
            type="text"
          ></input>
        </div>
        <div className="mb-2 mt-4">
          <label
            className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
            htmlFor="instansi"
          >
            Instansi
          </label>
          <input
            required
            onChange={handleChange}
            name="instansi"
            className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
            id="instansi"
            placeholder="Instansi"
            type="text"
            value={formData.instansi}
          ></input>
        </div>
        <div className="mb-2 mt-4">
          <label
            className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
            htmlFor="kontak"
          >
            Kontak
          </label>
          <input
            required
            onChange={handleChange}
            name="kontak"
            className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
            id="kontak"
            placeholder="Kontak"
            type="text"
            value={formData.kontak}
          ></input>
        </div>
        <div className="mb-2 mt-4">
          <label
            className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
            htmlFor="pengalaman_layanan"
          >
            Pengalaman Layanan
          </label>
          <textarea
            required
            onChange={handleChange}
            name="pengalaman_layanan"
            className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
            id="pengalaman_layanan"
            placeholder="Pengalaman Layanan"
            value={formData.pengalaman_layanan}
          ></textarea>
        </div>
        <div className="mb-2 mt-4">
          <label
            className="mb-2 block font-poppins text-sm font-medium text-[#111827]"
            htmlFor="usulan"
          >
            Usulan
          </label>
          <textarea
            required
            onChange={handleChange}
            name="usulan"
            className=" block w-full rounded-lg border border-[#DADDE2]  p-2.5 font-poppins text-sm text-gray-900 outline-none"
            id="usulan"
            placeholder="Usulan"
            value={formData.usulan}
          ></textarea>
        </div>
        <div className="flex items-center ">
          <button className="mt-4 w-full rounded-lg bg-[#1D6363]  px-5 py-2.5 text-center font-poppins text-sm font-medium text-white outline-none  hover:bg-[#236f6f] sm:w-auto">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Feedback;
