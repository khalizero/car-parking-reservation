"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import clsx from "clsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/why-us", label: "Why Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="top-0 z-50 sticky bg-orange-100 shadow-md text-black/70">
      <nav className="relative flex justify-between items-center mx-auto px-6 py-4 max-w-[1600px]">
        {/* Logo with Icon */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-orange-600 text-3xl"
        >
          <span className="text-4xl">🚗</span>
          <span>PASPARK</span>
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-orange-600 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "relative hover:text-orange-600 transition-all duration-300 ease-in-out",
                    {
                      "text-orange-600": isActive,
                    }
                  )}
                >
                  <span
                    className={clsx(
                      'after:-bottom-1 after:left-0 after:absolute after:bg-yellow-400 after:h-[2px] after:content-[""] after:transition-all after:duration-300',
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <ul className="md:hidden top-16 left-0 absolute flex flex-col items-center gap-6 bg-gray-800 shadow-lg py-6 rounded-md w-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "relative text-black/70 text-lg transition-all duration-300",
                      "hover:text-orange-900",
                      {
                        "text-orange-900": isActive,
                      }
                    )}
                  >
                    <span
                      className={clsx(
                        'after:-bottom-1 after:left-0 after:absolute after:bg-yellow-400 after:h-[2px] after:content-[""] after:transition-all after:duration-300',
                        isActive
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
