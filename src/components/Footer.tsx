import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer: FC = () => {
    return (
        <div className="flex">
            <footer className="bg-white text-black py-2 w-screen">
                    <div className="grid grid-cols-3 gap-2 md:gap-8 md:space-x-12 relative">
                        <div className='flex flex-col col-span-3 mx-4 items-center'>
                                <div className="text-xs text-left m-1 place-items-start items-start tracking-tight">
                                        © 2023 Foundation for Infinite Gains, Inc.
                                </div>
                        </div>
                    </div>
            </footer>
        </div>
    );
};
