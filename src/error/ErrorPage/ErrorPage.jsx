import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import imageNotFound from "../../images/how-to-find-and-fix-404-errors-in-wordpress.png.webp";

const ErrorPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Typography variant="h1">
                            404
                        </Typography>
                        <Typography variant="h6">
                            The page you’re looking for doesn’t exist.
                        </Typography>
                        <Button variant="contained">
                            <Link to={`/`} style={{ color: 'white',textDecoration: 'none' }}>Back Home</Link>
                        </Button>
                    </Grid>
                    <Grid xs={6}>
                        <img
                            src={imageNotFound}
                            alt=""
                            width={500} height={250}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ErrorPage;
