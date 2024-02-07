'use client';

import Image from "next/image";
import logo from '@/public/daedong.png';
import SignInCheck from "./signInCheck";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const handleLogoClick = () => {
        router.push('/');
    }

    return (
        <header className="flex items-center justify-between fixed h-[15vh] px-12 z-[120] cursor-pointer" >
            <Image 
                src={logo} 
                alt="logo" 
                className="invert w-1/5"
                onClick={handleLogoClick}
            />
            <SignInCheck />
        </header>
    )
}