import PostBoard from "./postBoard"
import PostView from "./postView/postView";
import { fetchPost } from "./fetchPost";
import { swtichName } from "../functions.tsx/switchName";

type Props = {
    params: { location: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Board(props: Props) {
    const location = props.params.location;
    let displayName = swtichName(location);
    let data = await fetchPost(0, location);

    return (    
        <div className="flex flex-col items-center">
            <p className="text-white text-[2rem] mb-6 nnb">{ displayName }</p>
            <PostBoard data={data} data2={data} location={location} />
            <PostView /> 
        </div>
    )
}