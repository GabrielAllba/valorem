"use client";

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const features = [
  {
    name: "Dasar penghitungan ganti rugi",
    description:
      "landasan menghitung ganti rugi dalam situasi seperti penyalahgunaan kekayaan intelektual lainnya. Ini membantu menentukan besarnya kompensasi yang harus diberikan kepada pemilik hak.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Jaminan Fidusia",
    description:
      " jaminan dalam transaksi keuangan, menunjukkan nilai aset intelektual sebagai kepercayaan.",
    icon: LockClosedIcon,
  },
  {
    name: "Membantu pengambilan keputusan internal",
    description:
      " membantu internal dalam mengambil keputusan dan alokasi sumber daya dengan memberikan pemahaman yang lebih baik tentang nilai aset intelektual.",
    icon: ArrowPathIcon,
  },
];

const Tujuan = () => {
  return (
    <div className="bg-white py-24 font-poppins">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-start justify-start lg:text-center">
          <p className=" text-start text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tujuan Valuasi Kekayaan Intelektual
          </p>

          <p className="mt-6 text-start text-lg leading-8 text-gray-600">
            Penilaian suatu perusahaan untuk keperluan merger, akuisisi, usaha patungan atau
            kebangkrutan. Negosiasi untuk menjual atau melisensikan HKI. Dukungan dalam situasi
            terjadi pelanggaran atau konflik terkait HKI
          </p>
          <a
            className="mt-6 flex items-center rounded-xl bg-[#1D6363] px-4 py-2 text-white hover:bg-[#236c6c]"
            href=""
          >
            <PlayCircleIcon className="h-6 w-6"></PlayCircleIcon>
            <span className="pl-2">Tonton video guide</span>
          </a>
        </div>
        <div className="mx-auto  max-w-2xl lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 ">
            {features.map((feature) => (
              <div className="relative pl-20" key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex items-center justify-center rounded-lg  bg-[#E0F1DF] p-4 ">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-[#1D6363]" />
                  </div>
                  {feature.name}
                </dt>

                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Tujuan;
