import React from 'react';
import {Box, Typography} from "@mui/material";
import BooksCard from "../BooksCard/BooksCard";
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import { changePagesBooks, fetchGetBooks} from "../../store/booksSlice";


const BooksArea = () => {
    const dispatch = useDispatch()
    const books = useSelector((state) => state.books.books)
    const status = useSelector((state) => state.books.status)
    const pages = useSelector((state) => state.books.pages)
    const totalItemsBooks = useSelector((state) => state.books.totalItems)

    const stylesAdaptive = {
        grid: {
            display:"Flex",
            justifyContent:"space-around",
            alignItems:"center",
            maxWidth:'90vw',
            margin: '0 auto',
            padding:'0',
            overflowX: 'visible',
            overflowY: 'scroll',
            flexWrap:'wrap',
            '@media (max-width: 1100px)': {
                direction:"column",
                flexDirection:'column'
            }
        }
    }

    return (
        <>
            <Typography sx={{textAlign:'center'}} variant='h6'>Found {totalItemsBooks} results</Typography>
            <Box
                sx={stylesAdaptive.grid}
            >
                {status === 'resolved' &&
                    books.map((elem)=>{
                        return <BooksCard  key={elem.id} booksId={elem.id} images={elem.volumeInfo.imageLinks && elem.volumeInfo.imageLinks.smallThumbnail} titleBooks={elem.volumeInfo.title} author={elem.volumeInfo.authors} category={elem.volumeInfo.categories}/>
                    })
                }


            </Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                { status === 'resolved' &&
                    <Button variant="contained" disableElevation onClick={()=>{
                        dispatch(changePagesBooks(pages + 1))
                        dispatch(fetchGetBooks())
                    }}>
                        load more
                    </Button>
                }
            </Grid>

        </>
    );
};

export default BooksArea;
