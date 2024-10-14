import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'


function Material() {
  var itemData = [
    
  ];
  for (let i = 1; i <= 22; i++) {
    itemData.push({
      id: i,
      img: `${process.env.PUBLIC_URL}/posts/images${i}.jpeg`,
      title: `Item ${i}`,
      description: `Description for item ${i}`,
    })
}
// console.log(window.innerWidth)
  
  return (
    <div style={{padding:"10px 10vw"}}>
      {/* <h2>Our products</h2> */}
{/* <ImageList cols={3} gap={10} >
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 3x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList> */}
<ImageList variant="masonry" cols={window.innerWidth<750?2:3} gap={5}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=248&fit=crop&auto=format`}
        alt={item.title}
        title={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
    </div>
  )
}

export default Material