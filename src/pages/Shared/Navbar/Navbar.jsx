import { NavLink, Link } from "react-router-dom";
import userImg from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () => {
        logOut();
    }

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 items-center">
                <img className=" w-12 rounded-full" src={userImg} alt="" />
                {
                    user ? <button onClick={handleLogout} className="btn rounded-none bg-[#403F3F] text-white text-lg w-32">Logout</button>
                    : <button className="btn rounded-none bg-[#403F3F] text-white text-lg w-32"><Link to={"/login"}>Login</Link></button>
                }
                
                
            </div>
        </div>
    );
};

export default Navbar;