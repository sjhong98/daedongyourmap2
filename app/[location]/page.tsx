import { swtichName } from "../functions.tsx/switchName";
import PostBoard from "./postBoard"
import { fetchPost } from "./fetchPost";
import PostView from "./postView/postView";

type Props = {
    params: { location: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Board(props: Props) {
    let displayName = swtichName(props.params.location);
    const data = await fetchPost();

    return (    
        <div className="flex flex-col items-center">
            <p className="text-white text-[2rem] mb-6 nnb">{ displayName }</p>
            <PostBoard data={data} data2={data} />
            <PostView /> 
        </div>
    )
}