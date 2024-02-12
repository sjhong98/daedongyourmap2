import Link from "next/link"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const menu = [
        {url:'/setting/edit', display:'프로필 수정'},
        {url:'/setting/changePw', display:'비밀번호 변경'}
    ]
    return(
        <div className="flex w-[50vw] h-[75vh] bg-stone-800 rounded-2xl shadow-2xl nnb">
            <div className="flex flex-col w-1/4 h-full border-r-2 border-stone-900 pl-12 py-12">
            { menu.map((item:any, index:number) => {
                return (
                    <div key={index} className="flex h-[5vh]">
                        <Link href={item.url} className="text-white">{item.display}</Link>
                    </div>
                )
            })}
            </div>
            <div className="w-3/4 h-full">
            { children }
            </div>
        </div>
    )
}