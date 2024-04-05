import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaEye } from "react-icons/fa";
import { CiShare2, CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { title, author, image_url, details, rating, total_view, _id } = post;

    return (
        <div>
            <div className="border pb-4 mb-6 space-y-4">
                <div className=' flex justify-between items-center bg-[#F3F3F3] p-4'>
                    <div className="flex gap-2 items-center">
                        <img className="w-10 rounded-full" src={author.img} alt="" />
                        <div>
                            <p className="font-bold">{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className=' flex gap-2'>
                        <CiBookmark />
                        <CiShare2 />
                    </div>
                </div>
                <div className="px-4 space-y-4">
                    <h1 className="font-bold text-lg">{title}</h1>
                    <img className="w-full h-56 lg:h-64 xl:h-80 pb-4" src={image_url} alt="" />
                    {
                        details.length > 200
                            ? <span>
                                <p>{details.slice(0, 150)}</p>
                                <Link to={`/news/${_id}`} className=' text-[#FF8C47] font-bold'>Read More</Link></span>
                            : <p>{details}</p>
                    }
                    <hr className="border" />
                    <div className=' flex items-center justify-between'>
                        <div className=' flex items-center gap-2'>
                            <Rating style={{ maxWidth: 100 }} value={rating.number} />
                            <p>{rating.number}</p>
                        </div>
                        <div className=' flex items-center gap-2'>
                            <FaEye />
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
