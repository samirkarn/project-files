"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const SideMenuBar = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className="fixed top-0 left-0 h-screen w-20 bg-[#F6F7F5] text-center border-r-2 border-gray-300">
            <div className="flex justify-center items-center h-16 border-b-2 border-gray-300">
                <MdKeyboardDoubleArrowRight className="text-2xl" />
            </div>
            <nav className="mt-4 flex flex-col justify-between h-full">
                <ul className="space-y-8">
                    <Link href="/">
                        <li className={`${pathname === '#' ? '' : ''}`}>
                            <div className="flex justify-center mb-6 mt-4">
                                <img className="h-5 w-5" src="/images/logo1.png" alt="Logo 1" />
                            </div>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={`${pathname === '#' ? '' : ''}`}>
                            <div className="flex justify-center my-6">
                                <img className="h-5 w-5" src="/images/logo2.png" alt="Logo 2" />
                            </div>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={`${pathname === '#' ? '' : ''}`}>
                            <div className="flex justify-center my-6">
                                <img className="h-5 w-5" src="/images/logo3.png" alt="Logo 3" />
                            </div>
                        </li>
                    </Link>
                    <Link href="/">
                        <li>
                            <div className={`${pathname === '/' ? 'bg-white border-2' : ''} flex justify-center my-6 p-1.5 m-auto w-1/2`}>
                                <img className="h-5 w-5" src="/images/logo4.png" alt="Logo 4" />
                            </div>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={`${pathname === '#' ? '' : ''}`}>
                            <div className="flex justify-center my-6">
                                <img className="h-5 w-5" src="/images/logo5.png" alt="Logo 5" />
                            </div>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={`${pathname === '#' ? '' : ''}`}>
                            <div className="flex justify-center my-6">
                                <img className="h-5 w-5" src="/images/logo6.png" alt="Logo 6" />
                            </div>
                        </li>
                    </Link>
                </ul>

                <ul className="pb-16">
                    <Link href="/">
                        <li className={`${pathname === '#' ? '' : ''}`}>
                            <div className="flex justify-center my-6">
                                <img className="h-5 w-5" src="/images/logo7.png" alt="Logo 5" />
                            </div>
                        </li>
                    </Link>
                    <Link href="/">
                        <li className={`${pathname === '#' ? '' : ''}`}>
                            <div className="flex justify-center my-6">
                                <img className="h-5 w-5" src="/images/logo8.png" alt="Logo 6" />
                            </div>
                        </li>
                    </Link>
                </ul>
            </nav>

        </div>
    );
};

export default SideMenuBar;
