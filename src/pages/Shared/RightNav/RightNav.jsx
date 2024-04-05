import { FaGoogle, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bgImage from "../../../assets/bg.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const RightNav = () => {
    const navigate = useNavigate()
    const { user, googleSignIn, githubSignIn } = useContext(AuthContext)

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

    return (
        <div>
            { !user &&
                <div className=" space-y-2 mb-10">
                    <h1 className=" font-bold text-lg mb-5">Login With</h1>
                    <button onClick={handleGoogleSignIn} className=" flex justify-center items-center gap-2 border-2 w-full py-2 rounded-lg border-blue-400 text-blue-400"><FaGoogle />Login with Google</button>
                    <button onClick={handleGithubSignIn} className=" flex justify-center items-center gap-2 border-2 w-full py-2 rounded-lg border-black"><FaGithub />Login with Github</button>
                </div>
            }
            <h1 className=" font-bold text-lg mb-5">Find Us On</h1>
            <span>
                <button className=" rounded-t-xl flex items-center gap-2 border w-full pl-6 py-3 text-[#3B599C]"><FaFacebook />Facebook</button>
                <button className=" flex items-center gap-2 border w-full pl-6 py-3 text-[#58A7DE]"><FaTwitter />Twitter</button>
                <button className=" rounded-b-xl flex items-center gap-2 border w-full pl-6 py-3 text-[#D82D7E]"><RiInstagramFill />Instagram</button>
            </span>
            <div className=" px-1 py-5 bg-[#F3F3F3] mt-5 space-y-5">
                <h1 className=" px-5 font-bold text-lg">Q-Zone</h1>
                <img className=" border-2 border-gray-300 border-dashed" src={qZone1} alt="" />
                <img className=" border-2 border-gray-300 border-dashed" src={qZone2} alt="" />
                <img className=" border-2 border-gray-300 border-dashed" src={qZone3} alt="" />
            </div>
            <div className=" text-white text-center space-y-5 px-6 flex flex-col justify-center items-center" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px' }}>
                <h1 className=" text-2xl font-bold">Create an Amazing Newspaper</h1>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className=" text-xl bg-[#D72050] p-5">Learn More</button>
            </div>
        </div>
    );
};

export default RightNav;