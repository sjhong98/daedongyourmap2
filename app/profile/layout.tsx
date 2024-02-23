import Link from "next/link"
import ProfileInfo from "./[email]/profileInfo"
import PostBoard from "../[location]/postBoard"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
        <div className="flex w-screen h-full">
            <title>대동, 당신의 지도 | 프로필</title>
            <div className='w-1/3 h-full center'>
                <ProfileInfo />
            </div>
            <div className="w-2/3 h-full center">
                { children }
            </div>
        </div>
    )
}