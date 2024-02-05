import Image from "next/image";
import logo from '@/public/daedong.png';


export default function Header() {
    return (
        <div className="flex items-center fixed h-[15vh] px-12 z-[120]">
            <Image src={logo} alt="logo" className="invert w-1/5"/>
            
        </div>
    )
}