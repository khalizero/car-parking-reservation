"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="!flex justify-between items-center bg-transparent !px-14 py-4">
        <h1 className="font-bold text-white text-2xl">PASPARK</h1>
        <ul className="flex !gap-6">
          <li>
            <Link
              href="/"
              className="bg-orange-500 px-4 py-1 rounded text-white"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white hover:text-orange-400 transition"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="text-white hover:text-orange-400 transition"
            >
              PRICING
            </Link>
          </li>
          <li>
            <Link
              href="/why-us"
              className="text-white hover:text-orange-400 transition"
            >
              WHY US
            </Link>
          </li>
          <li>
            <Link
              href="/testimonials"
              className="text-white hover:text-orange-400 transition"
            >
              TESTIMONIAL
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
