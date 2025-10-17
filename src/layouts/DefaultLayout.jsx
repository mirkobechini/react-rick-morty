import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout({ fetchData }) {
    return (
        <>
            <AppHeader fetchData={fetchData} />
            <Outlet />
            <AppFooter/>
        </>
    )
}