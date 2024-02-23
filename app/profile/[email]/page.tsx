import PostBoard from '@/app/[location]/postBoard';
import ProfileInfo from './profileInfo';

type Props = {
    params: { email: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function Profile(props: Props) {
    let email = props.params.email.replace('%40', '@');

    return (
        <div className="flex w-screen h-full">
            <title>대동, 당신의 지도 | 프로필</title>
            <div className='w-1/3 h-full center'>
                <ProfileInfo 
                    email={email} 
                />
            </div>
            <div className="w-2/3 h-full center">
                posts
            </div>
        </div>
    )
}

