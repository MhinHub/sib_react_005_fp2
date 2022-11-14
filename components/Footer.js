import React from 'react'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-evenly items-center w-full bg-black text-white mt-40 py-4 mb-0 align-bottom bottom-0 relative">
      <p>© 2022 Hashop. All rights reserved</p>
      <Link className="text-gray-300 underline" href="/about">
        About Dev
      </Link>
    </footer>
  );
}
