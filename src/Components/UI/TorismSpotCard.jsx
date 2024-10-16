import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
const TorismSpotCard = ({spotInfo}) => {
    const {
        countryName,
        image,
        tourisSpotLocation,
        touristSoptName,
        averageCost
    } = spotInfo;
    return (
        <div className='border-2 border-[#13131326] rounded-2xl p-6 space-y-4'>
        <div className="">
        <img src={image} alt="" className='w-[345px] h-[345px] rounded-2xl'/>
        <p className="flex items-center justify-center gap-1 -mt-10 text-white"><CiLocationOn className="text-3xl font-bold" /><span>{`${tourisSpotLocation},${countryName}`}</span></p>
        </div>
        <div className='space-y-2 pb-3 border-b-2 border-dashed border-[%13131326]'>
            <h1 className='text-2xl font-bold text-[#131313] hover:text-blue-500'>{touristSoptName}</h1>
            <p className='text-sm font-medium text-[#131313]'><span className="text-2xl font-bold">${averageCost}</span>starts form</p>
        </div>
        <button className="btn btn-primary w-full rounded-full hover:btn-warning">View Details</button>
    </div>
    );
};

export default TorismSpotCard;
TorismSpotCard.propTypes = {
    spotInfo:PropTypes.object.isRequired
}