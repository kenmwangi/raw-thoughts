import Link from "next/link";
import { Playfair_Display } from "@next/font/google";

const inter = Playfair_Display({ subsets: ["latin"], weight: "400" });

const navItems = [
  { id: "1", href: "/about", title: "About" },
  { id: "2", href: "/thoughts", title: "Thoughts" },
];

const Header = () => {
  return (
    <div className={inter.className}>
      <header className="pt-10 pb-8 flex justify-between items-center">
        <Link
          href="/"
          className="border-black hover:bg-black hover:text-white hover:cursor-pointer shadow-[4px_5px_#000] border-4 py-2 px-8 font-bold text-xl transition-all rounded-sm"
        >
          Raw Thoughts
        </Link>
        <nav className="relative z-0 flex justify-around">
          {navItems.map((navItem) => {
            const { id, href, title } = navItem;
            return (
              <Link
                key={id}
                href={href}
                className="ml-6 underline-offset-8 underline text-xl lg:text-2xl hover:bg-black hover:text-white transition-colors font-semibold px-1 py-[1px]"
              >
                {title}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
};

export default Header;
