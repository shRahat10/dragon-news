import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import RightNav from "../Shared/RightNav/RightNav";


const NewsDetails = () => {

    const { id } = useParams();
    const { data } = useContext(AuthContext);
    const details = data.find((news) => id === news._id);


    return (
        <div>
            <Header></Header>
            <div className=" grid grid-cols-4 gap-4">
                <div className=" col-span-3">
                    <h1 className=" font-bold text-lg mb-5">Dragon News</h1>
                    <div className=" space-y-5 border p-5">
                        <img className=" rounded-xl" src={details.image_url} alt="" />
                        <h1 className=" text-2xl font-bold">{details.title}</h1>
                        <p>{details.details}</p>
                        <button className=" mt-5 btn rounded-none bg-[#D72050] text-white text-lg"><Link to={"/"}>All news in this category</Link></button>
                    </div>
                    <button className=" mt-5 btn rounded-none bg-[#403F3F] text-white text-lg"><Link to={"/"}>Back to home</Link></button>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
            
        </div>
    );
};

export default NewsDetails;