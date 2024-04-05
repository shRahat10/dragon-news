import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className=" max-w-[1440px] mx-auto font-poppins p-10">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;