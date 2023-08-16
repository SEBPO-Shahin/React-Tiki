import { NavLink, Outlet } from "react-router-dom";

export default function Home(){
    return(
        <div className="root-layout">
            
            <header>
                <nav>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}