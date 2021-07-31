import Layout from './../../components/Layout'
import {getRandomJoke} from '../../lib/jokes'
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import Link from 'next/link'
export default function Jokes({ 
    joke:joke
}){

    return (
        <Layout>
            <Card className="my-3 shadow">
                <Card.Body>
                    <Card.Title>
                        <span>Here is a new story</span> 
                    </Card.Title>
                    <Card.Text>
                       <span>{joke.value}</span>
                    </Card.Text>
                </Card.Body>
                {/* <Link href={`/posts/${post.id}`} passHref><button className="btn btn-primary">See more</button></Link> */}
            </Card>
        </Layout>
        
    )
}
export const getServerSideProps=async()=>{
    const joke=await getRandomJoke();
    return {
        props:{
            joke
        }
    }
}