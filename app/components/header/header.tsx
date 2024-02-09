'use client';

import Image from "next/image";
import logo from '@/public/daedong.png';
import SignInCheck from "./signInCheck";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const router = useRouter();
    const handleLogoClick = () => {
        router.push('/');
    }

    return (
        <header className="flex items-center fixed h-[15vh] px-12 z-[120] cursor-pointer" >
            <Image 
                src={logo} 
                alt="logo" 
                className="invert w-1/5"
                onClick={handleLogoClick}
            />
            <div className="flex-1" />
            <Link href="/create" className="nnn text-white mr-4">create</Link>
            <SignInCheck />
        </header>
    )
}