import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Score from './components/score/Score';
import Quiz from './components/quiz/Quiz';
import Home from './components/home/Home';


const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/quiz",
                element: <Quiz/>
            },
            {
                path:"/score",
                element: <Score/>
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}/>
);
