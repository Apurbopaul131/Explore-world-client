import { useLoaderData } from "react-router-dom";
import AllTourisSpotCard from "../Components/UI/AllTourisSpotCard";



const AllTouristSpots = () => {
    const sortTouristSpots = useLoaderData();
    console.log(sortTouristSpots);
    return (
        <div className="my-12">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    sortTouristSpots.map((spot)=><AllTourisSpotCard key={spot._id} spot={spot}></AllTourisSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;