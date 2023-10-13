import React from 'react';
import DescriptionBooks from "./pages/DescriptionBooks/DescriptionBooks";
import BooksCatalog from "./pages/BooksCatalog/BooksCatalog";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error/ErrorPage/ErrorPage";
import {useSelector} from "react-redux";

function App() {
    const books = useSelector((state) => state.books.books)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <BooksCatalog />,
            errorElement: <ErrorPage />
        },
        {
            path: 'DescriptionBooks/:booksId',
            element: <DescriptionBooks />,
            errorElement: <ErrorPage />,
            loader: async ({ params }) => {
                const booksId = params.booksId.replace(/:/g,'')
                return books.filter((elem) => elem.id  === booksId)
            }
        }
    ])
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
