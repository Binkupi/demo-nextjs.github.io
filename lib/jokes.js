import axios from 'axios'

export const getRandomJoke= async()=>{
    try{
        const joke= await axios.get('https://api.chucknorris.io/jokes/random');
    return joke.data;
    }catch(err){
        console.log(err);
    }
    
}