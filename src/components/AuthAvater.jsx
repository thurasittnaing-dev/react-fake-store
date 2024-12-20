import React from 'react'
import avater from "./../assets/avater.png";

export default function AuthAvater() {
  return (
    <>
        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-12 h-12 rounded-full" src={avater} alt="user photo" />
            </button>

            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Thura Sitt Naing</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">thura@gmail.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
                </ul>
        </div>
    </>
  )
}
