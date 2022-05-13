import Image from "next/image"
import React from 'react'
import { 
    SearchIcon,
    UsersIcon,
    UserCircleIcon,
    MenuIcon,
    GlobeAltIcon 
} from "@heroicons/react/solid"


function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md  p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer">
                <Image
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png'
                />
            </div>
            <div className="flex items-center 
            md:border-2 rounded-full py-2 md:shadow-sm">
                <input className='flex-grow outline-none pl-5 
                bg-transparent text-sm text-gray-600 placeholder-gray-400' type="text" placeholder="Start your search"
                />
                <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 
                text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>
                <div className="flex 
                rounded-full border-2 space-x-2 p-2 ">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>
        </header>
    )
}

export default Header