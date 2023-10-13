import React from 'react';
import Header from "../../components/Header/Header";
import BooksArea from "../../components/BooksArea/BooksArea";
import {Box} from "@mui/material";
import LoaderSpiner from "../../components/loaderSpiner/loaderSpiner";
import {useSelector} from "react-redux";

const BooksCatalog = () => {
    const status = useSelector((state) => state.books.status)
    return (
        <Box sx={{overflowX: 'hidden'}}>
            <Header/>
            { status === 'loading'
                ? <LoaderSpiner/>
                : <BooksArea/>
            }

        </Box>

    );
};

export default BooksCatalog;
