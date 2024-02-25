import PostBoard from '@/app/[location]/postBoard';
import { fetchPost } from '@/app/[location]/fetchPost';
import { CountType, GetCount } from '@/app/components/map/getCount';

type Props = {
    params: { email: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Profile(props: Props) {
    let email = props.params.email.replace('%40', '@');
    let data = await fetchPost("all", email);
    let counts: CountType[] = [];
    await GetCount("profile", email)
    .then((res) => {
        counts = res;
    })

    return (
        <div className="w-fill h-full center">
            <PostBoard 
                data={data}  
                email={email} 
                counts={counts}
            />
        </div>
    )
}

