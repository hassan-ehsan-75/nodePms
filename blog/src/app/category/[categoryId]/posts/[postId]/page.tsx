
'use client'
import * as React from "react";
import styles from '../../../page.module.css'
import {Container} from "@mui/material";
import {useState, useEffect} from "react";
import {BASE_URL, CDN_URL} from "../../../../Constants";


export const metadata = {
    title: 'Post',
    description: 'Generated by create next app',
};

export default function Post({params}) {
    const postId=params.postId;
    const [post, setPost] = useState({});
    const [isLoading, setLoading] = useState(true);
    const fetchCats = async () => {
        try {
            setLoading(true);
            const headers = {
                'content-type': 'application/json',
                // 'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
            };
            const requestBody = {
                query: '{ postsById(post_id:"'+postId+'"){ _id title description attachment }}',
            };
            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify(requestBody)
            };
            const response = await (await fetch(BASE_URL, options)).json();
            return response;
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCats().then(response => {
            setPost(response.data.postsById);
        });
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (

        <main className={styles.main}>

            {!isLoading &&
            <Container>
                <div>
                    <img
                        src={`${CDN_URL}/${post.attachment}`}
                        width={500}
                        height={300}
                        style={{width: "33rem", height: "12rem"}}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <h4 className={`text-xl font-medium font-bold`}>{post.title}</h4>
                    <p>{post.description}</p>
                </div>

            </Container>
            }
        </main>

    );
}