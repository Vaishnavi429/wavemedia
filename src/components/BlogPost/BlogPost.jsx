import React from 'react';
import './BlogPost.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const BlogPost = ({ id, postImageUrl, title, description, reads, time, categories }) => {
    // const blogData = {
    //     id: 'lizard-reptiles',
    //     postImageUrl: 'https://cdn.pixabay.com/photo/2020/07/04/20/12/green-lizard-5370821__340.jpg',
    //     title: 'Lizard are a widespread group of squamate reptiles, with over',
    //     description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    //     reads: 5,
    //     time: 2
    // }

    return (
        <Card sx={{ maxWidth: 345 }} className='mx-auto'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={ postImageUrl }
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className='blogPost__text'>
                        { title.slice(0, 60) }...
                    </Typography>

                    <Typography variant="body2" color="text.secondary" className='blogPost__text'>
                        { description.slice(0, 130) }...
                    </Typography>

                    <Typography variant="body2" color="text.secondary" className='blogPost__text blogPost__socialInfo'>
                        { reads } reads
                        {' '}<CircleIcon className='blogPost__dot' />{' '}
                        { time } hours ago
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default BlogPost;