import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";

const TourismSpot = () => {
    const tourismSpot = useLoaderData();
    const {
        touristSoptName,
        averageCost,
        countryName,
        image,
        perYearVisitors,
        seasonality,
        tourisSpotLocation,
        touristSpotDescription,
        travelTime,
        userEmail,
        userName
    } = tourismSpot;
    return (
        <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-8 my-10'>
        <div className=''>
            <img src={image} alt="" className='rounded-2xl' />
        </div>
        <div>
            <div className='space-y-4 pb-6 border-b-2 border-[#13131326]'>
                <h1 className='text-4xl font-bold text-[#131313]'>{touristSoptName}</h1>
                <p className='text-xl font-medium text-[#131313CC] flex items-center'><CiLocationOn className="text-2xl font-bold" /><span>{`${tourisSpotLocation},${countryName}`}</span></p>
            </div>
            <h3 className='text-xl font-medium text-[#131313CC] py-4 border-b-2 border-[#13131326]'>{averageCost}M</h3>
            <div className='space-y-4 pb-4 border-b-2 border-[#13131326] my-2'>
                <p className='text-xl font-bold text-[#131313]'>Description: <span className='text-sm text-[#131313B3]'>{touristSpotDescription}</span></p>
            </div>
            <div className='flex gap-5 items-center my-2'>
                        <h3 className='text-sm font-bold text-[#131313]'>Name:</h3>
                        <h3 className='py-2 px-4 rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium'>{userName}</h3>
                        <h3 className='text-sm font-bold text-[#131313]'>Email:</h3>
                        <h3 className='py-2 px-4 rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium'>{userEmail}</h3>
                    </div>
            <div className='space-y-3 py-4'>
                <p className='flex gap-2'><span className='text-sm text-[#131313B3]'>Per year visitors:</span><span className='text-sm text-[#131313] font-semibold'>{perYearVisitors}M</span></p>
                <p className='flex gap-2'><span className='text-sm text-[#131313B3]'>Seastionality:</span><span className='text-sm text-[#131313] font-semibold'>{seasonality}</span></p>
                <p className='flex gap-2'><span className='text-sm text-[#131313B3]'> Travel time:</span><span className='text-sm text-[#131313] font-semibold'>{travelTime}</span></p>
            </div>
        </div>
    </div>
    );
};

export default TourismSpot;