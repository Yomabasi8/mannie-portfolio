"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Work Samples", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#F1F7FE]/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logoo.png"
            alt="Wave Productions Logo"
            width={110}
            height={36}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10 font-jetbrains text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-200 ${
                pathname === link.href
                  ? "text-brand-button"
                  : "text-brand-black-light hover:text-brand-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="/#contact"
            className="bg-brand-button text-white font-jetbrains text-sm font-bold px-6 py-3 rounded-lg border-2 border-brand-black-dark shadow-[3px_3px_0px_0px_#060606] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#060606] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_#060606] transition-all duration-150 inline-block text-center"
          >
            Start Project
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-brand-black-dark hover:text-brand-secondary focus:outline-none p-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-brand-secondary/10 px-4 pt-2 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-4 font-jetbrains text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 border-b border-brand-secondary/5 ${
                  pathname === link.href
                    ? "text-brand-button"
                    : "text-brand-black-light hover:text-brand-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-button text-white font-jetbrains text-center text-sm font-bold py-3 rounded-lg border-2 border-brand-black-dark shadow-[3px_3px_0px_0px_#060606] block"
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
