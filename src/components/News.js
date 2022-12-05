import React from 'react';
import '../App.css';

import './News.css';

function News() {
  return (
    <>
    <div className='newsMain'>
    <div id="news" className='newsSection'>
        <div   className='newsBox'>
            <h1 id="news">Netday is coming!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='imgContainer'>
        <img src="images/news.png" alt='netday'/> 
        </div>
    </div>
    <div className='newsText'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              
            </div>
            <div className='newsText'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              
            </div>
    </div>
    </>
  );
}

export default News; 