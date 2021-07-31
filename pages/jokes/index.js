import Layout from '../../components/Layout'
import {getIcons} from '../../lib/icon'
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import Link from 'next/link'
export default function Icon({ 
    icons
})
{   
    const convertString=(text)=>{
        var lines =text.split('\n');
      for(var line = 0; line < lines.length; line++){    
            task(lines[line],line)    
      }
      
    }
    function task(text,i) {
        setTimeout(function() {
          document.getElementById('content').innerHTML+=text;
          document.getElementById('content').innerHTML+='</br>';
          var scrollingElement = (document.scrollingElement || document.body);
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        }, 100 * i);
      }

    const showMe=(icons)=>{
        document.getElementById('btn-show').style.display='none';
        document.getElementById('cmt').style.display='block';
        convertString(icons[0].iconContent)
        
    }
    return (
        <Layout>
            <Card className="my-3 shadow">
                <Card.Body>
                    <Card.Title>
                        <div className="text-center">
                        <span >Bin Kupi</span> 
                        </div> 
                    </Card.Title>
                    <div className="text-center">
                        <button onClick={()=>showMe(icons)} id='btn-show' className='btn btn-primary text-align'>Xem hình ảnh của tôi</button>
                    </div>
                    
                    <p id='content' style={{fontFamily:"monospace",
                                    fontSize:'1.2rem'}} className='text-center'>
                    </p>
                    <p className='text-center' id='cmt' style={{display:'none'}}>Đẹp không =))Thu nhỏ để dễ nhìn hơn</p>
                </Card.Body>
                {/* <Link href={`/posts/${post.id}`} passHref><button className="btn btn-primary">See more</button></Link> */}
            </Card>
        </Layout>
        
    )
}
export const getStaticProps=async()=>{
    const icons=await getIcons();

    return {
        props:{
            icons
        }
    }
}