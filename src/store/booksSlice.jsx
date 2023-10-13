import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
export const fetchGetBooks = createAsyncThunk(
    'books/fetchGetBooks',
    async function(arg,{getState}){
        const state = getState()
        const {categories,searchValueBooks,sortingBy,pages} = state.books
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${categories}:${searchValueBooks}&orderBy=${sortingBy}&key=AIzaSyAyZXaVtls-C0mStE2cK07qQU6XzQaBQtI&maxResults=30&startIndex=${pages}`, {
            method: "GET",
        })
        return response.json()
    }

)


export const stateDefaultValue = {
    books: [],
    sortingBy:'relevance',
    categories:'all',
    totalItems:0,
    searchValueBooks:'',
    pages:1,
    status:'notProduced',
}

const initialState = stateDefaultValue

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        changeSortingBy(state, action) {
            console.log(action.payload)
            state.sortingBy = action.payload
        },
        changeCategories(state, action) {
            console.log(action.payload)

            state.categories = action.payload
        },
        changeSearchValueBooks(state, action) {
            state.searchValueBooks = action.payload
        },
        changePagesBooks(state, action) {
            state.pages = action.payload
        },
        clearStore(state, action) {
            const {sortingBy, categories, totalItems, searchValueBooks, pages, status,books} = stateDefaultValue;
            state.sortingBy = sortingBy
            state.categories = categories
            state.totalItems = totalItems
            state.searchValueBooks = searchValueBooks
            state.pages = pages
            state.books = books
            state.status = status

        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetBooks.fulfilled, (state, {payload}) => {
            state.books = [...state.books,...payload.items]
            state.totalItems = payload.totalItems
            state.status = 'resolved'
        })
        builder.addCase(fetchGetBooks.pending, (state, {payload}) => {
            state.status = 'loading'
        })
        builder.addCase(fetchGetBooks.rejected, (state, action) => {
            state.status = 'error'
        })

    },

});

export const {
    changeSortingBy,
    changeCategories,
    changeSearchValueBooks,
    changePagesBooks ,
    clearStore
} = booksSlice.actions;
export default booksSlice.reducer;
