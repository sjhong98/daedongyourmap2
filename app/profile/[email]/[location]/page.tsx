import PostBoard from '@/app/[location]/postBoard';
import { fetchPost } from '@/app/[location]/fetchPost';
import { swtichName } from '@/app/functions/switchName';

type Props = {
    params: { email: string, location: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Profile(props: Props) {
    let email = props.params.email.replace('%40', '@');
    let location = props.params.location;
    let switchedName = swtichName(location);
    let data = await fetchPost("all", email);

    return (
        <div className="w-fill h-full center flex-col">
            <div>
                <p className='text-white text-[2rem] mb-10 nnb'>{switchedName}</p>
            </div>
            <PostBoard 
                data={data}  
                email={email} 
                location={location}
            />
        </div>
    )
}

