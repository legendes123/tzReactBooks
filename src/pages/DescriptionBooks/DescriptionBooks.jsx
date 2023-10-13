import React from 'react';
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import {useLoaderData} from "react-router-dom";



const DescriptionBooks = () => {
    const styles = {
        grid: {
            display:"Flex",
            justifyContent:"space-around",
            alignItems:"center",
            margin: '0 auto',
            padding:'0',
            flexWrap:'wrap',
            '@media (max-width: 1100px)': {
                direction:"column",
                flexDirection:'column'
            }
        }
    }
    const book = useLoaderData()
    return (
        <Box

            sx={styles.grid}
        >
            <Box boxShadow={3} sx={{ width: '10vw',margin:'0',padding:'0' }}>
                <CardMedia
                    sx={{boxShadow: 3,width: '10vw',height:'30vh'}}
                    component="img"

                    image={book[0].volumeInfo.imageLinks && book[0].volumeInfo.imageLinks.smallThumbnail}
                    alt="Paella dish"
                />
            </Box>
            <Box sx={{ width: '30vw',marginTop:'20px',padding:'0' }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <Box sx={{ height:'15vh', textAlign: 'center'}}>
                        <Typography variant="h5" color="text.secondary">
                            {book[0].volumeInfo.title}
                        </Typography>
                    </Box>
                    <Box sx={{ height:'15vh'}}>

                        {
                            book[0].volumeInfo.description ?
                                <Box>
                                    <Typography variant="h3" color="text.secondary">
                                        Сategories:
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {book[0].volumeInfo.categories[0]}
                                    </Typography>
                                </Box>
                                :
                                <Typography variant="subtitle2" color="text.secondary">
                                    no categories
                                </Typography>
                        }
                    </Box>


                    <Box sx={{ height:'15vh'}}>
                        {
                            book[0].volumeInfo.description ?
                                <Box>
                                    <Typography variant="h3" color="text.secondary">
                                        Author:
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                       {book[0].volumeInfo.authors[0]}
                                    </Typography>
                                </Box>

                                :
                                <Typography variant="subtitle2" color="text.secondary">
                                    no author
                                </Typography>
                        }
                    </Box>
                    <Box sx={{ height:'15vh'}}>
                        {
                            book[0].volumeInfo.description ?
                                <Box>
                                    <Typography variant="h3" color="text.secondary">
                                        Description:
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                       {book[0].volumeInfo.description}
                                    </Typography>
                                </Box>
                                :
                                <Typography variant="subtitle2" color="text.secondary">
                                    no description
                                </Typography>
                        }

                    </Box>


                </Grid>
            </Box>

        </Box>
    );
};

export default DescriptionBooks;
