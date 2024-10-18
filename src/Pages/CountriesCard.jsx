import { useLoaderData } from "react-router-dom";
import FilterCoutryCard from "../Components/UI/FilterCoutryCard";


const CountriesCard = () => {
    const filteredCoutriesData = useLoaderData();
    console.log(filteredCoutriesData);
    return (
        <div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    filteredCoutriesData.map((filterCountry)=><FilterCoutryCard key={filterCountry._id} filterCounrty={filterCountry}></FilterCoutryCard>)
                }
            </div>
        </div>
    );
};

export default CountriesCard;