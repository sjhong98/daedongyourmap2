'use client';

import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import Resizer from "react-image-file-resizer";
import ClearIcon from '@mui/icons-material/Clear';

interface propsType{
    image: any[]
    setImage: Dispatch<SetStateAction<any[]>>
}

export default function InputImage(props:propsType) {
    const {image, setImage} = props;

    const handleImageAdd = async (e:any) => {
        let temp = [...image];

        const resizeFile = (file:any) =>
            new Promise((resolve) => {
                Resizer.imageFileResizer(
                    file,
                    300,
                    300,
                    "JPEG",
                    60,
                    0,
                    (uri) => { resolve(uri); },
                    "blob"
                );	
            }
        );
        console.log(e.target.file[0]);
        const resizedImage = await resizeFile(e.target.file[0]);
        temp.push(resizedImage);
        setImage(temp);
    }

    const handleDeleteImage = (index:number) => {
        let temp = [...image];
        temp.splice(index, 1);
        setImage(temp);
    }

    return(
        <div className="w-[20vw] h-[10vh]">
            <input
                id="input-image"
                type='file'
                multiple
                onChange={handleImageAdd}
                accept='.png, .jpg, .jpeg, .HEIC, image/*'
                className="hidden"
            />
            <Label 
                htmlFor="input-image" 
                className="cursor-pointer lml mc bg-white rounded-md center" 
            >
                upload image
            </Label>
            <div className="w-full h-full p-2 flex justify-center">
            { image.map((item, index) => {
                let url = URL.createObjectURL(item);
                return (
                    <div key={index}>
                        <img 
                            src={url} 
                            alt="..." 
                            className="h-[5vh] aspect-square object-cover mr-2"
                        />
                        <div 
                            className="absolute w-[1vw] h-[1vw] bg-black mt-[-1.5vh] center cursor-pointer"
                            onClick={()=>handleDeleteImage(index)}
                        >
                            <ClearIcon sx={{width:20}} />
                        </div>
                    </div>
                )
            }) }
            </div>
        </div>
    )
}

const Label = styled.label`
    transition: 0.15s ease;
    &:hover {
        background-color: #003545;
        color: white;
    }
`