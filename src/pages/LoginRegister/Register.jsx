import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState(null)
    const navigate = useNavigate();

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 8) {
            setRegisterError("Password must be at least 8 characters long.");
        }
        else if (!password.match(/[a-z]/)) {
            setRegisterError("Password must contain at least one lowercase letter.");
        }
        else if (!password.match(/[A-Z]/)) {
            setRegisterError("Password must contain at least one uppercase letter.");
        }
        else if (!password.match(/[0-9]/)) {
            setRegisterError("Password must contain at least one number.");
        }
        else {
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    e.target.reset();
                    setRegisterError('');
                    navigate("/login");
                })
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className=" w-[700px] mx-auto mt-40">
                <div className="text-center lg:text-left">
                    <h1 className=" text-center text-3xl font-bold">Register your account</h1>
                    <hr className=" mt-10" />
                </div>
                <form onSubmit={handleCreateUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input name='url' type="text" placeholder="Enter your photo url" className="input bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email address</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email address" className="input bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control flex flex-row items-center">
                        <input name="checkbox" type="checkbox" id="termsAndConditions" className="mr-2" required />
                        <label htmlFor="termsAndConditions" className="cursor-pointer">
                            Accept Term & Conditions
                        </label>
                    </div>
                    {
                        registerError && <p className=" text-red-500">{registerError}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#403F3F]">Register</button>
                    </div>
                </form>
                <p className=" text-center">Already Have An Account ? <Link className=" text-red-500" to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;