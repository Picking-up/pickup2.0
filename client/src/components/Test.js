import React,{ Component } from 'react';
import { Parallax,Background } from 'react-parallax';

export default class Test extends Component {
  render(){
    return (
    <div>
      <div>
       <Parallax bgImage="http://sandypoirier.com/wordpress/wp-content/uploads/2015/08/bb-no-logo.jpg" strength={400} className='parallax'>
         <br/>
          <div className='title'>
            <h1> BasketBall </h1>
          </div>
       </Parallax>
     </div>
     <div>
      <Parallax bgImage="https://s-media-cache-ak0.pinimg.com/originals/35/65/c4/3565c47f8ae1b3800a05c826ef2ec98c.jpg" strength={400} className='parallax'>
        <br/>
        <div className='title'>
         <h1> Baseball </h1>
        </div>
      </Parallax>
    </div>
    <div>
        <Parallax bgImage="https://s-media-cache-ak0.pinimg.com/originals/46/3e/86/463e8646d44789aa5cb3690aaea0bdc3.jpg" strength={400} className='parallax'>
          <br/>
          <div className='title'>
           <h1> Football </h1>
          </div>
        </Parallax>
      </div>
      <div>
        <Parallax bgImage="https://farpostfooty.files.wordpress.com/2016/02/goal-photo.jpeg?w=1200" strength={400} className='parallax'>
          <br/>
          <div className='title'>
            <h1> Soccer </h1>
          </div>
        </Parallax>
       </div>
     </div>


    )
  }
}
