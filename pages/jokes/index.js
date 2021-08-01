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
          console.log(text.length)
          var scrollingElement = (document.scrollingElement || document.body);
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        }, 100 * i);
      }

    const showMe=(icons)=>{
        document.getElementById('btn-show').style.display='none';
        document.getElementById('animation').style.display='block';
        document.getElementById('loading').style.display='block';
        setTimeout(function(){
            document.getElementById('animation').style.display='none';
            document.getElementById('loading').style.display='none';
            
            convertString(icons[0].iconContent);
            document.getElementById('cmt').style.display='block';
            },5000)
             
      
        
        
    }
    return (
        <Layout>
            <Card className="my-3 shadow">
                <Card.Body>
                    <Card.Title>
                        <div className="text-center">
                        <span > Đây là tôi &lt;3 &lt;3</span> 
                        </div> 
                    </Card.Title>
                    <div className="text-center">
                        <button onClick={()=>showMe(icons)} id='btn-show' className='btn btn-primary text-align'>Đợi chờ chi nữa. Nhấp vào nào!!!</button>
                    </div >
                    <div id='animation' style={{display:'none'}} className="text-center mt-4">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-dark" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    <p className="mt-3 mb-3 text-center" id="loading" style={{display:'none'}}>Đợi chờ Nhiii nào &lt;3</p>
                    <p id='content' style={{fontFamily:"monospace",
                                  fontSize:'5px',fontHeight:'5px' }} className='text-center'>
                    </p>
                    <p className='text-center' id='cmt' style={{display:'none'}}>Đẹp không =)) Zoom nhỏ trình duyệt để nhìn hơn nè</p>
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