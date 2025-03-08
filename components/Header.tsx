import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Perdanaerda</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <span className="hover:underline cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:underline cursor-pointer">About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:underline cursor-pointer">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
