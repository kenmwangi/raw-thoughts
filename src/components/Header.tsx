import Link from "next/link";
import React from "react";
import { Disclosure } from "@headlessui/react";

import ThemeSwitcher from "./ThemeSwitcher";

// Nav Items
const navItems = [
  { id: "1", href: "/about", title: "About" },
  { id: "2", href: "/thoughts", title: "Thoughts" },
];

const Header = () => {
  return (
    <div className="w-full">
      <nav className="container max-w-6xl relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <React.Fragment>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
                >
                  <span>Nextly</span>
                </Link>

                {/* Mobile Menu */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <React.Fragment>
                    {navItems.map((navItem) => {
                      const { id, href, title } = navItem;
                      return (
                        <Link
                          key={id}
                          href={href}
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg:bg-indigo-100 focus:outline-none dark:focus:bg-slate-700"
                        >
                          {title}
                        </Link>
                      );
                    })}
                  </React.Fragment>
                </Disclosure.Panel>
              </div>
            </React.Fragment>
          )}
        </Disclosure>

        {/* Large screen Menu */}

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navItems.map((navItem) => (
              <li className="mr-3 nav__item" key={navItem.id}>
                <Link
                  href={navItem.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-100 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden mr-3 space-x-3 lg:flex">
            <ThemeSwitcher />
          </div>
        </div>

        {/* ThemeChanger */}
      </nav>
    </div>
  );
};

export default Header;

// import Link from "next/link";
// import { Playfair_Display } from "@next/font/google";

// const inter = Playfair_Display({ subsets: ["latin"], weight: "400" });

// const navItems = [
//   { id: "1", href: "/about", title: "About" },
//   { id: "2", href: "/thoughts", title: "Thoughts" },
// ];

// const Header = () => {
//   return (
//     <div className={inter.className}>
//       <header className="pt-10 pb-8 flex justify-between items-center">
//         <Link
//           href="/"
//           className="border-black hover:bg-black hover:text-white hover:cursor-pointer shadow-[4px_5px_#000] border-2 lg:border-4 py-1 lg:py-2 px-4 lg:px-8 lg:font-bold font-semibold text-lg lg:text-xl transition-all rounded-sm"
//         >
//           Raw Thoughts
//         </Link>
//         <nav className="relative z-0 flex justify-around">
//           {navItems.map((navItem) => {
//             const { id, href, title } = navItem;
//             return (
//               <Link
//                 key={id}
//                 href={href}
//                 className="ml-6 underline-offset-8 underline text-xl lg:text-2xl hover:bg-black hover:text-white transition-colors font-semibold px-1 py-[1px]"
//               >
//                 {title}
//               </Link>
//             );
//           })}
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;
