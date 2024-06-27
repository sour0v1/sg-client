import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/home/Home";
import Books from "../pages/books/Books";
import Members from "../pages/members/Members";
import ExecutiveMembers from "../pages/members/ExecutiveMembers";
import AdvisoryMembers from "../pages/members/AdvisoryMembers";
import ReaderMembers from "../pages/members/ReaderMembers";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminProfile from "../pages/dashboard/admin/AdminProfile";
import AddBook from "../pages/dashboard/admin/AddBook";
import GeneralMembers from "../pages/members/GeneralMembers";
import LifetimeMembers from "../pages/members/LifetimeMembers";
import MemberRequest from "../pages/dashboard/admin/MemberRequest";
import AddMember from "../pages/dashboard/admin/AddMember";
import TableBody from "../components/TableBody";
import Table from "../components/Table";

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
                path: 'advisory-members',
                element: <AdvisoryMembers></AdvisoryMembers>
            },
            {
                path: 'reader-members',
                element: <ReaderMembers></ReaderMembers>
            },
            {
                path: 'general-members',
                element: <GeneralMembers></GeneralMembers>
            },
            {
                path: 'lifetime-members',
                element: <LifetimeMembers></LifetimeMembers>
            }
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
                path: 'admin/member-request',
                element: <MemberRequest></MemberRequest>
            },
            {
                path: 'admin/add-member',
                element: <AddMember></AddMember>
            }
        ]
    }
])

export default router;