import Header from "../Shared/Header/Header";
import BreakingNews from "./BreakingNews";
import Navbar from "../Shared/Navbar/Navbar";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Post from "./Post";

const Home = () => {
    const { data } = useContext(AuthContext);
    // console.log(data)

    return (
        <div className=" space-y-4">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <span className=" grid grid-cols-1 lg:grid-cols-4 gap-4">
                <LeftNav></LeftNav>
                <div className=" col-span-2">
                    <h1 className=" font-bold text-lg mb-5">Dragon News Home</h1>
                    {
                        data?.map((post, idx) => <Post key={idx} post={post}></Post>)
                    }
                </div>
                <RightNav></RightNav>
            </span>
        </div>
    );
};

export default Home;