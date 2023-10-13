import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import { Link } from 'react-router-dom'
import noFoundImages from "../../images/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"


const BooksCard = ({titleBooks,author,category,images,booksId}) => {
    return (
        <Card sx={{ width: '15vw',height:"50vh",margin:'0',padding:'0'}}>
            <Link to={`/descriptionBooks/:${booksId}`} style={{ color: 'black' }}>
                <CardMedia
                    component="img"
                    alt={noFoundImages}
                    image={images}
                    sx={{width: '150px',maxHeight: '250px',margin:'0 auto'}}
                />
            </Link>

            <Box>
                <Typography variant="h6" color="text.secondary">
                    {category}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary"  sx={{ fontWeight: 'bold' }}>
                    {titleBooks}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {author}
                </Typography>
            </Box>

        </Card>

    );
};

export default BooksCard;
