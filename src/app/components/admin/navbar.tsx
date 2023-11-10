"use client";

import { Disclosure } from "@headlessui/react";
import { DocumentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

/* eslint-disable no-unused-vars */

const NavBar = ({ sidebar, toggleSidebar }: { sidebar: string; toggleSidebar: () => void }) => {
  const [mobile, setMobile] = useState(false);
  const updateMobile = () => {
    if (window.innerWidth < 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    updateMobile();
    window.addEventListener("resize", updateMobile);

    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);
  return (
    <>
      <Disclosure
        as="nav"
        className="fixed z-10 w-full border-b border-[#F3F1FF] bg-white font-poppins transition-all"
      >
        {({ open }) => (
          <>
            <div className="mx-auto  px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between py-4">
                <div className="flex flex-1 items-center justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <h1 className="font-bold text-[#1D6363]">valorem</h1>
                  </div>
                  <div className="flex">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                      <svg
                        className="absolute -left-1 h-10 w-10 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                      </svg>
                    </div>

                    <div className="hidden items-center space-x-4 md:flex">
                      <p className="pl-3 text-black">admin@gmail.com</p>
                    </div>
                    <button
                      aria-controls="separator-sidebar"
                      className="ml-3 flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                      data-drawer-target="separator-sidebar"
                      data-drawer-toggle="separator-sidebar"
                      onClick={mobile ? toggleSidebar : undefined}
                      type="button"
                    >
                      <span className="sr-only">Open sidebar</span>
                      <svg
                        aria-hidden="true"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <div className="flex items-center justify-end">
                  <button className="ml-2 rounded-xl bg-[#1D6363] px-4 py-2 text-white hover:bg-[#236c6c]">
                    Sign up
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="z-40">
        <div className="font-poppins">
          <aside
            aria-label="Sidebar"
            className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-[#F3F1FF] transition-transform ${
              sidebar === "active" ? "translate-x-0" : "-translate-x-full"
            }`}
            id="separator-sidebar"
          >
            <div className="h-full overflow-y-auto bg-white px-3 py-4">
              <ul className="h-full space-y-2 font-medium">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <li className="mb-8">
                      <Link
                        className="group flex  items-center"
                        href="/admin/hak_cipta/daftar_valuasi"
                        onClick={mobile ? toggleSidebar : undefined}
                      >
                        <span className="ml-3 font-semibold text-[#1D6363]">Valorem</span>
                      </Link>
                    </li>
                    <li>
                      <p className="p-4 py-2  font-medium text-black">Hak Cipta</p>
                    </li>

                    <li>
                      <Link
                        className="group flex items-center rounded-lg px-4 py-2 text-[#7D848C] hover:bg-[#F0F8EE] hover:text-[#1D6363] "
                        href="/admin/hak_cipta/daftar_valuasi"
                        onClick={mobile ? toggleSidebar : undefined}
                      >
                        <DocumentIcon className="h-4 w-4"></DocumentIcon>
                        <span className="ml-3 flex-1 whitespace-nowrap text-sm">
                          Daftar valuasi
                        </span>
                      </Link>
                    </li>
                    <li>
                      <p className="p-4 py-2  font-medium text-black">Paten</p>
                    </li>

                    <li>
                      <Link
                        className="group flex items-center rounded-lg px-4 py-2 text-[#7D848C] hover:bg-[#F0F8EE] hover:text-[#1D6363] "
                        href="/admin/paten/daftar_valuasi"
                        onClick={mobile ? toggleSidebar : undefined}
                      >
                        <DocumentIcon className="h-4 w-4"></DocumentIcon>
                        <span className="ml-3 flex-1 whitespace-nowrap text-sm">
                          Daftar valuasi
                        </span>
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link
                        className="group flex items-center rounded-lg px-4 py-2 text-[#7D848C] hover:bg-[#F0F8EE] hover:text-[#1D6363] "
                        href="#"
                        onClick={mobile ? toggleSidebar : undefined}
                      >
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 transition duration-75 "
                          fill="currentColor"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        <span className="ml-3 flex-1 whitespace-nowrap">Log Out</span>
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default NavBar;
