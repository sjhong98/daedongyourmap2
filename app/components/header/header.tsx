import Image from "next/image";
import logo from '@/public/daedong.png';
import SignInCheck from "./signInCheck";

export default function Header() {
    return (
        <header className="flex items-center justify-between fixed h-[15vh] px-12 z-[120]" >
            <Image src={logo} alt="logo" className="invert w-1/5"/>
            <SignInCheck />
        </header>
    )
}