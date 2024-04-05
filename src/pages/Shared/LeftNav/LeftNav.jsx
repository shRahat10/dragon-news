import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { CiCalendarDate } from "react-icons/ci";
import pic1 from "../../../assets/1.png"
import pic2 from "../../../assets/2.png"
import pic3 from "../../../assets/3.png"


const LeftNav = () => {
    const { category } = useContext(AuthContext);
    // console.log(category)
    return (
        <div>
            <div className=" space-y-6">
                <h1 className=" font-bold text-lg mb-5">All Category</h1>
                <div className=" text-lg ml-8 flex flex-col items-start space-y-5 text-[#9F9F9F]">
                    {
                        category?.map((data, idx) => <button key={idx}>{data.name}</button>)
                    }
                </div>
                <div>
                    <img src={pic1} alt="" />
                    <p className=" font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <span className=" flex gap-3 items-center">
                        <p>Sports</p>
                        <CiCalendarDate />
                        <p>Jan 4, 2022</p>
                    </span>
                </div>
                <div>
                    <img src={pic2} alt="" />
                    <p className=" font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <span className=" flex gap-3 items-center">
                        <p>Sports</p>
                        <CiCalendarDate />
                        <p>Jan 4, 2022</p>
                    </span>
                </div>
                <div>
                    <img src={pic3} alt="" />
                    <p className=" font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <span className=" flex gap-3 items-center">
                        <p>Sports</p>
                        <CiCalendarDate />
                        <p>Jan 4, 2022</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;