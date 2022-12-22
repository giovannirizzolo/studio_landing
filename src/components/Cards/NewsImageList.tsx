import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'

import './NewsImageList.scss'


import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";

const itemData = [
    {
        imgSrc: news1,
        title: "Lorem ipsum dolor",
        author: "Studio design",
    },
    {
        imgSrc: news2,
        title: "Lorem ipsum dolor",
        author: "Emanuel Kant",
    },
];


const NewsImageList = () => {

    
  return (
    <ImageList gap={64}>
      {itemData.map((img) => (
        <ImageListItem key={img.title}>
        <img
          src={`${img.imgSrc}?w=248&fit=crop&auto=format`}
          srcSet={`${img.imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={img.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={<Typography sx={{paddingTop: 2}} variant="h3">{img.title}</Typography>}
          subtitle={<Typography variant="subtitle">by: {img.author}</Typography>}
          position="below"
        />
      </ImageListItem>
      ))}
    </ImageList>

  )
}

export default NewsImageList