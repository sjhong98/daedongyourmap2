import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firestore/config";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

export async function searchKeyword (keyword: string) {
    console.log("search keyword ...", keyword);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const postsRef = collection(db, "posts");
    const searchQuery = query(postsRef, where('tags', 'array-contains', keyword));
    const querySnapshot = await getDocs(searchQuery);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
    // return res;
}