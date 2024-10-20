import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../Components/UI/Banner";
import CountryCard from "../Components/UI/CountryCard";
import TorismSpotCard from "../Components/UI/TorismSpotCard";


const Home = () => {
    const tourismSpots = useLoaderData();
    console.log(tourismSpots);
    const [countries,setCountries] = useState([]);
    const navaigate = useNavigate();
    const handleCountryCard = (countryName) => {
        navaigate(`/country/${countryName}`);
    }
    useEffect(()=>{
        const loadCountriesData = async() =>{
            const response = await fetch("http://localhost:5000/countries");
            const result = await response.json();
            setCountries(result);
        }
        loadCountriesData();
    },[])
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

            <div>
                <h1 className="text-5xl text-[#374151] font-bold text-center">Countries</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {
                    countries.map((country)=><CountryCard 
                    key={country._id} 
                    country={country}
                    handleCountryCard={handleCountryCard}
                    ></CountryCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;