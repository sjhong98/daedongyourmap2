import PostBoard from '@/app/[location]/postBoard';
import ProfileInfo from './profileInfo';
import { fetchPost } from '@/app/[location]/fetchPost';

type Props = {
    params: { email: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Profile(props: Props) {
    let email = props.params.email.replace('%40', '@');
    let data = await fetchPost("all", email);

    return (
        <div className="flex w-screen h-full">
            <title>대동, 당신의 지도 | 프로필</title>
            <div className='w-1/3 h-full center'>
                <ProfileInfo 
                    email={email} 
                />
            </div>
            <div className="w-2/3 h-full center">
                <PostBoard data={data} data2={data} email={email} />
            </div>
        </div>
    )
}

