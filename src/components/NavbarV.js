"use client";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


// const callsToAction = [
//   { name: "Watch demo", href: "/", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "/", icon: PhoneIcon },
// ];

export default function NavbarV() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950  border-b-2 border-gray-400/80  justify-center items-center ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
        <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="./medical-logo.png"
                alt="Logo"
                className="h-12 w-auto rounded-sm transition-transform hover:scale-105"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] tracking-wide hover:scale-105 transition-transform duration-200">DOCTOR CARE</span>
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 justify-center items-center">
          

          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-gray-200"
          >
            Features
          </Link>
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-gray-200"
          >
            Marketplace
          </Link>
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-gray-200"
          >
            Company
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="text-lg font-semibold text-white hover:text-gray-200 bg-blue-500 py-2 px-3 rounded-lg"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="text-sm font-semibold text-gray-900 leading-6 block"
                >
                  Features
                </Link>
                <Link
                  to="/"
                  className="text-sm font-semibold text-gray-900 leading-6 block"
                >
                  Marketplace
                </Link>
                <Link
                  to="/"
                  className="text-sm font-semibold text-gray-900 leading-6 block"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/"
                  className="block w-full text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
