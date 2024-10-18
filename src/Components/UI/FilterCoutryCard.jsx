import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { SiSession } from "react-icons/si";
import { Link } from 'react-router-dom';
const FilterCoutryCard = ({filterCounrty}) => {
    const {
        _id,
        touristSoptName,
        countryName,
        tourisSpotLocation,
        seasonality,
        touristSpotDescription,
        averageCost,
        image
    } = filterCounrty;
   
   console.log(touristSpotDescription)
    return (
        <div className='border-2 border-[#13131326] rounded-2xl p-6 space-y-4'>
        <img src={image} alt="" className='w-[345px] h-[345px] rounded-2xl'/>
        
        <div className='space-y-2 pb-3 border-b-2 border-dashed border-[#13131326]'>
            <h1 className='text-2xl font-bold text-[#131313] hover:text-blue-500'>{touristSoptName}</h1>
            <p className='text-sm font-medium text-[#131313]'><span className="text-2xl font-bold">${averageCost}</span>starts form</p>
        </div>

        <div className='flex gap-5 items-center pb-3 border-b-2 border-dashed border-[#13131326]'>
            <p className='flex items-center gap-1 text-sm font-medium text-[#131313]'><CiLocationOn />
            <span>{`${tourisSpotLocation},${countryName}`}</span></p>
            <p className='flex items-center gap-1 text-sm font-medium text-[#131313]'><SiSession /><span>{seasonality}</span></p>
        </div>
       <Link to={`/tourismspot/${_id}`}><button className="mt-5 btn btn-primary w-full rounded-full hover:btn-warning">View Details</button></Link>
    </div>
    );
};

export default FilterCoutryCard;
FilterCoutryCard.propTypes = {
    filterCounrty:PropTypes.object.isRequired
}