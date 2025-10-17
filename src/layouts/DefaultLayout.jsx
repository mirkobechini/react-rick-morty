import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout({menu}) {
    return (
        <>
            <AppHeader menu = {menu} />
            <Outlet />
            <AppFooter menu = {menu}/>
        </>
    )
}