import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'


function Material() {
  var itemData = [
    
  ];
  for (let i = 1; i <= 34; i++) {
    itemData.push({
      id: i,
      img: `${process.env.PUBLIC_URL}/products/material${i}.jpeg`,
      title: `Item ${i}`,
      description: `Description for item ${i}`,
    })
}
  
  return (
    <div style={{padding:"10px 6%"}}>
      <h2>Our products</h2>
<ImageList sx={{ height: 600 }} cols={3} gap={10} >
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
</ImageList>
    </div>
  )
}

export default Material