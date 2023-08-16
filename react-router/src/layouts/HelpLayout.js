import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout(){
    return(
        <div className="help-layout">
            
           <h2>Get help</h2>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <nav>
                <NavLink to="/faq">Faq</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>

        </div>
    )
}