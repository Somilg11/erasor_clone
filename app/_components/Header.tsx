import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="bg-black dark:bg-gray-900">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Image src='/logo-1.png' alt='Logo' width={50} height={50}/>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a
              className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              About
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Careers
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              History
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Services
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black dark:hover:bg-white"
            href="#"
          >
            <LoginLink postLoginRedirectURL='/dashboard'>Login</LoginLink>
          </a>

          <a
            className="hidden rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:text-white sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            href="#"
          >
            <RegisterLink>Register</RegisterLink>
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-black transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header