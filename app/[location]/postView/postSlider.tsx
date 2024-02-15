'use client';

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PostType } from "../../recoilContextProvider";

export default function PostSlider(props:{post:PostType | null}) {
    const photo = props.post?.photo;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <AR />, 
    };

    function AR(props:any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", filter:'invert(50%)' }}
            onClick={onClick}
          />
        );
      }

    return(
        <div className="h-full w-full">
        { photo !== undefined && photo.length !== 1 ?
            <Slider {...settings}>
            { photo?.map((item:any, index:number) => {
                return (
                    <div key={index} className="w-[40vw] h-[80vh]">
                        <Image
                            src={item.stringValue}
                            alt="..."
                            width={600}
                            height={600}
                            className={`object-cover max-h-[80vh]`}
                        />
                    </div>
            )})}
            </Slider>
            :
            <div key={0} className="w-[40vw] h-[80vh] flex items-center">
                <Image
                    src={photo!==undefined && photo[0].stringValue}
                    alt="..."
                    width={600}
                    height={800}
                    className={`object-cover max-h-[80vh]`}
                />
            </div>

        }
        
        </div>
    )
}