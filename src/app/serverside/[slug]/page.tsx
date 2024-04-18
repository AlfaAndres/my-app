"use client"
import {FC, useState} from "react";
import axios from "axios";

//z backendu (/api/posts) pomocí HTTP requestu pomoci
// knihovny axios ziskejte vsechny posty



const Page: FC = (props:any ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<any[]>([])

    axios.get('/api/posts').then(function(response) {
        console.log(response);
        setIsLoading(false);
        console.log(response.data);
        setPosts(response.data);
    });
    console.log(props);
    return (
        <>
            <p>Číslo: {props.params.slug}</p>
            <p>Obsah:
                {" "}
                {!isLoading && posts.filter(
                    (post) => (post.id == props.params.slug)
                )[0].content}
            </p>
        </>

    )
}

export default Page;