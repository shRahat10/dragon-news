import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi";

const BreakingNews = () => {
    const { data } = useContext(AuthContext);

    return (
        <div className=" flex gap-2 justify-center items-center bg-[#F3F3F3] h-20 px-4">
            <button className=" bg-[#D72050] text-white w-28 h-12 text-lg font-medium">Latest</button>
            <Marquee pauseOnHover={true}>
                {
                    data?.map((news, idx) =>
                        <div key={idx} className=" flex gap-4 mx-2 items-center">
                            <Link className=" text-lg font-bold" to={`/news/${news._id}`}>{news.title}</Link>
                            <TfiLayoutAccordionSeparated />
                        </div>
                    )
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;