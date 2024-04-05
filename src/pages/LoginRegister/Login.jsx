import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {

    const [loginError, setLoginError] = useState(null);
    const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error))

    }
    const handleGithubSignIn = () => {
        githubSignIn()
        .then(() => {
            navigate('/')
        })
        .catch(error => console.log(error))

    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signInUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset();
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setLoginError('Unidentified Email or Password')
            })
    }

    return (
        <div>
            <div className=" lg:w-[700px] mx-auto lg:mt-40">
                <div className="text-center lg:text-left">
                    <h1 className=" text-center text-3xl font-bold">Login your account</h1>
                    <hr className=" mt-10" />
                </div>
                <form onSubmit={handleSignIn} className="card-body">
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
                    {
                        loginError && <p className=" text-red-500">{loginError}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#403F3F]">Login</button>
                    </div>
                </form>
                <div className=" flex flex-col justify-center items-center gap-2">
                    <button onClick={handleGoogleSignIn} className=" flex justify-center items-center gap-2 border-2 w-56 lg:w-80 py-2 rounded-lg border-blue-400 text-blue-400"><FaGoogle />Login with Google</button>
                    <button onClick={handleGithubSignIn} className=" flex justify-center items-center gap-2 border-2 w-56 lg:w-80 py-2 rounded-lg border-black"><FaGithub />Login with Github</button>
                </div>
                <p className=" mt-3 text-center">Do not Have An Account ? <Link className=" text-red-500" to={'/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;