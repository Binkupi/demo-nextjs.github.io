import axios  from 'axios'

export const getPosts=async(limits)=>{
    try{
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limits}`);

        return response.data;
    }catch(err){
        console.log(err);
    }
    
}
export const getIdPosts=async(limits)=>{
    try{
        const posts=await getPosts(limits);
        return posts.map((post)=>{
            return {
                params:{
                    id:`${post.id}`
                }
            }
        })
        
        
    }catch(err){
        console.log(err)
    }
}
export const getPostById=async(id)=>{
    try{
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return response.data;
    }catch(err){
        console.log(err);
    }
    
}