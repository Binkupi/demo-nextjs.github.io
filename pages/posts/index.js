
import Layout from './../../components/Layout'
import {getPosts,getIdPosts,getPostById} from '../../lib/posts'
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import Link from 'next/link'
//create store trong redux

export default function Posts({ 
    posts
    }) {
        
    return (
        <>
            <Layout >
                {
                    posts.map((post,index)=>{
                        return (
                        <Card key={index} className="my-3 shadow">
                            <Card.Body>
                                <Card.Title>
                                    {post.id} --- {post.title}
                                </Card.Title>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>
                            </Card.Body>
                            <Link href={`/posts/${post.id}`} passHref><button className="btn btn-primary">See more</button></Link>
                        </Card>
                        )
                    })
                }
            </Layout>
        </>
    )
}
export const getStaticProps=async()=>{
   const posts=await getPosts(3);
   return {
        props:{
            posts
        },
        // revalidate: 10
   }
}
