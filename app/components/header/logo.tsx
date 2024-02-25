'use client';

import Image from "next/image";
import logo from '@/public/daedong.png';
import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter();
    const handleLogoClick = () => {
        router.push('/');
    }

    return (
        <Image
            src={logo} 
            alt="logo" 
            className="invert w-1/5"
            onClick={handleLogoClick}
        />
    )
}