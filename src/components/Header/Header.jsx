import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import SearchBar from '@mkyy/mui-search-bar';
import SelectFilters from "../SelectFilters/SelectFilters";
import {
    changeSortingBy,
    changeCategories,
    fetchGetBooks,
    changeSearchValueBooks,
    clearStore, stateDefaultValue
} from "../../store/booksSlice";
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';

const Header = () => {
    const categories = useSelector((state) => state.books.categories)
    const sortingBy = useSelector((state) => state.books.sortingBy)
    const dispatch = useDispatch()
    const [textFieldValue,setTextFieldValue] = useState('')
    function handleSearch(){
        dispatch(fetchGetBooks())
    }
    function handleChangeSortingBy(sortingByValue){
        dispatch(changeSortingBy(sortingByValue))
    }
    function handleChangeCategories(sortingByValue){
        dispatch(changeCategories(sortingByValue))
    }
    function handleChangeSearchValueBooks(){
        dispatch(changeSearchValueBooks(textFieldValue))
    }



    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                width:'100vw',
                height:'30vh',
                // backgroundImage: `url(${booksImages})`,
            }}
        >
            <Typography  variant='h6'>Search for books</Typography>
            <Box sx={{display:'inline-flex'}}>
                <SearchBar
                    style={
                        {
                            width:'20vw',
                        }
                    }
                    onChange={newValue => setTextFieldValue(newValue)}
                    onSearch={()=>{
                        handleChangeSearchValueBooks()
                        handleSearch()
                        dispatch(clearStore(stateDefaultValue))

                    }}

                />
                <Button variant="contained" disableElevation onClick={()=>{
                    handleChangeSearchValueBooks()
                    handleSearch()
                    dispatch(clearStore(stateDefaultValue))
                }}>
                    Search
                </Button>
            </Box>
            <Box sx={{display:'inline-flex',width:'20wh'}}
            >
                <Grid

                    direction="row"
                     justifyContent="center"
                     alignItems="center">
                    <Typography variant='h6'>Сategories</Typography>
                    <SelectFilters
                        nameFilters={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}
                        dispatchFilters={handleChangeCategories}
                        selectValue={categories}
                    />
                </Grid>
                <Grid

                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Typography variant='h6'>Sorting By</Typography>
                    <SelectFilters
                        nameFilters={['relevance','newest']}
                        dispatchFilters={handleChangeSortingBy}
                        selectValue={sortingBy}
                    />
                </Grid>


            </Box>
        </Grid>
    );
};

export default Header;
