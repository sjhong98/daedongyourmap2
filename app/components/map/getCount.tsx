import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firestore/config";
import { collection, getCountFromServer, getFirestore, query, where } from "firebase/firestore";

export const GetCount = async (state: string) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let locations = [{point: "incheon", count: 0}, {point: "gyeonggi", count: 0}, {point: "seoul", count: 0}, {point: "gangwon", count: 0}, {point: "chungnam", count: 0}, {point: "daejeon", count: 0}, {point: "chungbuk", count: 0}, {point: "kyungbuk", count: 0}, {point: "daegu", count: 0}, {point: "jeonbuk", count: 0}, {point: "jeonnam", count: 0}, {point: "gwangju", count: 0}, {point: "kyungnam", count: 0}, {point: "ulsan", count: 0}, {point: "busan", count: 0}, {point: "jeju", count: 0}];
    // for(let i=0; i<16; i++) {
    //     const posts = collection(db, "posts");
    //     const getQuery = query(posts, where("point", "==", locations[i].point));
    //     const snapshot = await getCountFromServer(getQuery);
    //     locations[i].count = snapshot.data().count;
    // }
    return locations;
}