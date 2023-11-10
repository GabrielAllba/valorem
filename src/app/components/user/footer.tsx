const Footer = () => {
  return (
    <footer className="bg-[#161C28] px-20 py-20 font-poppins">
      <div className="mx-auto w-full ">
        <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-4 lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Valorem
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <p>Yuk, mulai lihat valuasi kekayaan intelektual kamu!</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Akses
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Login
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Shortcut
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Tujuan Valuasi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Social Media
            </h2>
            <ul className="font-medium text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#161C28] py-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            All Rights Reserved. © 2023 Valorem. Copyright and rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
