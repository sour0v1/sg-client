import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/home/Home";
import Books from "../pages/books/Books";
import Members from "../pages/members/Members";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminProfile from "../pages/dashboard/admin/AdminProfile";
import AddBook from "../pages/dashboard/admin/AddBook";
import AddMember from "../pages/dashboard/admin/AddMember";
import Table from "../components/Table";
import MembersTable from "../pages/members/MembersTable";
import SignUp from "../pages/signup/SignUp";
import Applications from "../pages/dashboard/admin/Applications";
import Application from "../pages/dashboard/Application";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import UserProfile from "../pages/dashboard/user/UserProfile";
import PrivateRoute from "./PrivateRoute";
import RequestedBooks from "../pages/dashboard/user/RequestedBooks";
import ReqBooks from "../pages/dashboard/admin/ReqBooks";

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
                element: <Books></Books>,
                children: [
                    {
                        path: 'category/:category',
                        element: <Table></Table>
                    }
                ]
            },
            {
                path: '/members',
                element: <Members></Members>,
                children: [
                    {
                        path: 'member/:category',
                        element: <MembersTable></MembersTable>
                    },
                ]
            },
            {
                path: '/become-member',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // admin routes
            {
                path: 'admin/profile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'admin/add-book',
                element: <AddBook></AddBook>
            },
            {
                path: 'admin/applications',
                element: <Applications></Applications>
            },
            {
                path: 'admin/add-member',
                element: <AddMember></AddMember>
            },
            {
                path : 'admin/req-books',
                element : <ReqBooks></ReqBooks>
            },
            {
                path: 'admin/applications/:id',
                element: <Application></Application>
            },
            // user dashboard
            {
                path: 'user/profile',
                element : <UserProfile></UserProfile>
            },
            {
                path : 'user/requested-books',
                element : <RequestedBooks></RequestedBooks>
            }
        ]
    },
])

export default router;