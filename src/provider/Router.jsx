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
            {
                path: '/registration',
                element: <Registration></Registration>
            },
        ]
    },

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
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
                path: 'admin/applications/:id',
                element: <Application></Application>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    }
])

export default router;