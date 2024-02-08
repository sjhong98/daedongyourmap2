import { swtichName } from "../functions.tsx/switchName";
import PostBoard from "./postBoard"
import { fetchPost } from "./fetchPost";
import PostView from "../postView/postView";
import { PostType } from "../recoilContextProvider";

type Props = {
    params: { location: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Board(props: Props) {
    let displayName = swtichName(props.params.location);
    const data = await fetchPost();
    const extract:PostType[] = await data.map((item:any) => {
        return {
            createTime: item.createTime,
            title: item.fields.title.stringValue,
            content: item.fields.content.stringValue,
            point: item.fields.point.stringValue,
            photo: item.fields.photo.arrayValue.values,
            user: item.fields.user.stringValue,
            comments: item.fields.comments.arrayValue.values,
            name: item.name,
            likes: item.fields.likes.arrayValue.values,
        }
    })

    return (    
        <div className="flex flex-col items-center">
            <p className="text-white text-[2rem] mb-6 nnb">{ displayName }</p>
            <PostBoard data={extract} data2={data} />
            <PostView /> 
        </div>
    )
}