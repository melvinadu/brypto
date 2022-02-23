import React from 'react';
import * as rssParser from 'react-native-rss-parser';
import XMLParser from 'react-xml-parser';
  
const Blogs = () => {

  fetch('https://blockchain.news/RSS/', {mode: "no-cors"})
  .then(response => response.text())
  .then((data) => {
    let xml = new XMLParser().parseFromString(data); 
    console.log(xml);
  });
 
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        flexDirection: "column",
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <div className="feed1">
      <iframe 
       style={{
        display: 'flex',
        flexDirection: "row",
      }}
      width="100%" 
      // img="50px"
      height="750" 
      // frameborder="0" 
      className="feed" 
      src="https://www.rssdog.com/index.php?url=https%3A%2F%2FBlockchain.News%2FRSS%2F&amp;mode=html&amp;showonly=&amp;maxitems=0&amp;showdescs=1&amp;desctrim=0&amp;descmax=0&amp;tabwidth=100%25&amp;utf8=1&amp;linktarget=_blank&amp;bordercol=%23ff0000&amp;headbgcol=ff0000&amp;headtxtcol=%23ffffff&amp;titlebgcol=%23f1eded&amp;titletxtcol=%23000000&amp;itembgcol=%23ffffff&amp;itemtxtcol=%23000000&amp;ctl=0"
      >
      </iframe>
      </div>
      <h1>Cryptoken News</h1>
    </div>
  );
};
  
export default Blogs;