import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout(){
    return(
        <div className="help-layout">
            <h2>Get Help</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <nav>
<<<<<<< Updated upstream
                <NavLink to="faq">View Faq</NavLink>
                <NavLink to="contact">View Contact</NavLink>
=======
                <NavLink to="faq">Faq</NavLink>
                <NavLink to="contact">Contact</NavLink>
>>>>>>> Stashed changes
            </nav>

            <Outlet />
        </div>
    )
}