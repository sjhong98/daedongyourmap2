'use client';

import Link from "next/link";
import Image from "next/image";
import logo from '@/public/daedong.png';
import SignInCheck from "./signInCheck";
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const handleLogoClick = () => {
        router.push('/');
    }

    const handleClickAdd = () => {
        router.push('/create');
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
            <AddIcon className="cursor-pointer mr-4" onClick={handleClickAdd} />
            <SignInCheck />
        </header>
    )
}