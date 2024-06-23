import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/home/Home";
import Books from "../pages/books/Books";
import Members from "../pages/members/Members";
import ExecutiveMembers from "../pages/members/ExecutiveMembers";
import AdvisoryMembers from "../pages/members/AdvisoryMembers";
import ReaderMembers from "../pages/members/ReaderMembers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/books',
                element: <Books></Books>
            },
            // {
            //     path : '/members',
            //     element : <Members></Members>
            // },
        ]
    },
    {
        path: '/members',
        element: <Members></Members>,
        children: [
            {
                path: 'executive-members',
                element: <ExecutiveMembers></ExecutiveMembers>
            },
            {
                path : 'advisory-members',
                element : <AdvisoryMembers></AdvisoryMembers>
            },
            {
                path : 'reader-members',
                element : <ReaderMembers></ReaderMembers>
            }
        ]
    }
])

export default router;