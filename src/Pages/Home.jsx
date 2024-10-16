import { useLoaderData } from "react-router-dom";
import Banner from "../Components/UI/Banner";
import TorismSpotCard from "../Components/UI/TorismSpotCard";


const Home = () => {
    const tourismSpots = useLoaderData();
    console.log(tourismSpots);
    return (
        <div>
            <Banner/>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    tourismSpots.map((spot)=><TorismSpotCard 
                    key={spot._id} 
                    spotInfo={spot}></TorismSpotCard>)
                }
            </div>
        </div>
    );
};

export default Home;