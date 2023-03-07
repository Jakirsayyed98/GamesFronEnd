import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div>
            <ul className="nav-ul">
                
            <li><Link to="/">Home Page </Link></li>
            <li> <Link to="/Add">Add Games </Link></li>
            <li>  <Link to="/Delete">Delete Games </Link></li>
            <li>    <Link to="/Update">Update Games </Link></li>
            <li>    <Link to="/LogOut">LogOut </Link></li>
            <li>    <Link to="/Profile">Profile </Link></li>
            <li>    <Link to="/SignUp">SignUp </Link></li>

                
            </ul>
        </div>
    )
}

export default Nav;