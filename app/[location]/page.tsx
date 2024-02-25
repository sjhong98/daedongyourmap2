import PostBoard from "./postBoard"
import PostView from "./postView/postView";
import { fetchPost } from "./fetchPost";
import { swtichName } from "../functions/switchName";
import { CountType, GetCount } from "../components/map/getCount";

type Props = {
    params: { location: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Board(props: Props) {
    const location = props.params.location;
    let displayName = swtichName(location);
    let data = await fetchPost(location, "all");
    let counts: CountType[] = [];
    await GetCount("main")
    .then((res) => {
        counts = res;
    })

    return (    
        <div className="flex flex-col items-center">
            <title>{`대동, 당신의 지도 | ${location}`}</title>
            <div className="fixed mt-[-13vh]">
                <p className="text-white text-[2rem] mb-6 nnb">{ displayName }</p>
            </div>
            <PostBoard 
                data={data} 
                location={location} 
                counts={counts}
            />
            <PostView /> 
        </div>
    )
}