import Layout from './../../components/Layout'
import {getPosts,getIdPosts,getPostById} from '../../lib/posts'
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import {useRouter} from 'next/router'
//create store trong redux

export default function Post({ 
    post
    }) {
    
    const router=useRouter();
    console.log(router);
    if(router.isFallback)
    return(

        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
    return (
        <>
            <Layout >
                <Card className="my-3 shadow">
                    <Card.Body>
                        <Card.Title>
                            {post.id} --- {post.title}
                        </Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                    </Card.Body>
                    <Link href={`/posts`} passHref><button className="btn btn-primary">Go Back</button></Link>
                </Card>

            </Layout>
        </>
    )
}
export const getStaticPaths=async ()=>{
    const paths= await getIdPosts(1);
    return {
        paths,
       // fallback:false,//khi khong co url naos co trong path se tra ve trang 404
       fallback:true//khi khong co url nao da duoc lay ve-->chuyen sang trang doi--->lay du lieu--->hien thi lai trang
    }
}
export const getStaticProps=async({params})=>{

   const post=await getPostById(params.id);
   return {
     props:{
       post
     }
   }
}