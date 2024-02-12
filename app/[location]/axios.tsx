import axios from "axios";
import { resType } from "./types/type";

export async function Axios(startIndex:number, category:number) {
    console.log("category, startIndex : ", category, startIndex);
    const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${category}`);
    const data = response.data.objectIDs;
    
    let items:resType[] = [];
    for(let i=startIndex; i<startIndex+20; i++) {
        let item = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}`)
        if(item.data.primaryImageSmall !== ""){
            let temp = {
            primaryImageSmall: item.data.primaryImageSmall,
            title: item.data.title,
            city: item.data.city,
            artistDisplayBio: item.data.artistDisplayBio,
            artistDisplayName: item.data.artistDisplayName,
            country: item.data.country,
            dimensions: item.data.dimensions,
            medium: item.data.medium,
            objectName: item.data.objectName,
            objectURL: item.data.objectURL,
            repository: item.data.repository,
            objectID: item.data.objectID
            }
            items.push(temp);
        }
    }
    return items;
} 