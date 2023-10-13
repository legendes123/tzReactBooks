import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "./store/booksSlice";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const store = configureStore({
    reducer: {
        books:booksReducer,
    },
})
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>


);



