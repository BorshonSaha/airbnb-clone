import React from 'react';
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image 
                    src='https://links.papareact.com/qd3' 
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* Middle */}
            <div className='flex items-center border-2 rounded-full shadow-sm'>
                <input className='pl-4 bg-transparent outline-none flex-grow text-gray-500' type="text" placeholder="Start your search"/>
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2' />
            </div>

            {/* Right */}
            <div className='items-center flex space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>

                <div className='flex border-2 p-2 rounded-full space-x-2'>
                    <MenuIcon className='h-6 cursor-pointer'/>
                    <UserCircleIcon className='h-6 cursor-pointer'/>
                </div>
            </div>
        </header>
    );
};

export default Header;