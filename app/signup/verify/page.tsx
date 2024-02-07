import Logo from '@/public/daedong.png';
import Image from 'next/image';

export default function Verify() {
    return (
        <div className="center">
            <div className="flex flex-col items-center bg-white shadow-2xl rounded-3xl w-[25vw] h-[60vh]">
                <Image src={Logo} alt="logo" width={300} className="mt-12 mb-24" />
                <p className="text-[2rem] mb-4 nnn">회원가입 완료</p>
                <p className="text-[1rem] mb-10 nnn">이메일 인증을 완료하세요</p>
                <a href='/'>메인으로</a>
            </div>
        </div>
    )
}