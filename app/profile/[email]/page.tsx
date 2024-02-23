import PostBoard from '@/app/[location]/postBoard';
import { fetchPost } from '@/app/[location]/fetchPost';

type Props = {
    params: { email: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Profile(props: Props) {
    let email = props.params.email.replace('%40', '@');
    let data = await fetchPost("all", email);

    return (
        <div className="w-fill h-full center">
            <PostBoard 
                data={data}  
                email={email} 
            />
        </div>
    )
}

