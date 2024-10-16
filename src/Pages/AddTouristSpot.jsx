import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FirebaseContext } from "../Context/AuthContex";

const AddTouristSpot = () => {
  const { user } = useContext(FirebaseContext);
  const [selactedCountry,setSelactedCountry] = useState('bangladesh');
  const [seasonality,setSeastionality] = useState('summer');
  const handleCoffeAddSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const touristSoptName = formData.get("name");
    const countryName = selactedCountry;
    const tourisSpotLocation = formData.get("location");
    const touristSpotDescription = formData.get("description");
    const averageCost = formData.get("averagecost");
    const travelTime = formData.get("traveltime");
    const perYearVisitors = formData.get("visitorrs");
    const image = formData.get("photo");
    const userEmail = user.email;
    const userName = user.displayName;
    const touristSoptObj = {
      touristSoptName,
      countryName,
      tourisSpotLocation,
      touristSpotDescription,
      averageCost,
      travelTime,
      perYearVisitors,
      image,
      seasonality,
      userEmail,
      userName,
    };
    console.log(touristSoptObj);
    const TourismDetaisDatasendTosever = async() =>{
      const response = await fetch('http://localhost:5000/add-tourist-spot',{
        method:"POST",
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(touristSoptObj)
      })
      const result = await response.json();
      console.log(result);
      if(result.insertedId){
        toast.success("Add Torurism spot succesfully..");
        event.target.reset();
      }
    }
    TourismDetaisDatasendTosever();
  };
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <Toaster />
      <div className="space-y-8 text-center">
        <h3 className="text-5xl text-[#374151] font-bold">
          Add New Tourist Spot
        </h3>
        <p className="text-2xl text-[#1B1A1A B3]">
          Tourism is the activity of traveling to and exploring new destinations
          for leisure, business, or cultural experiences. It involves visiting
          different places to experience their natural beauty, history, culture,
          cuisine, and lifestyle. Tourism plays a significant role in the global
          economy by generating income, creating jobs, and promoting cultural
          exchange between people from different regions
        </p>
        <form onSubmit={handleCoffeAddSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tourist Sopt Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter tourist spot name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <select
                className="select select-primary w-full"
                value={selactedCountry}
                onChange={(e)=>setSelactedCountry(e.target.value)}
              >
                <option value={`bangladesh`}>Bangladesh</option>
                <option value={`thailand`}> Thailand</option>
                <option value={`indonesia`}>Indonesia</option>
                <option value={`malaysia`}>Malaysia</option>
                <option value={`vietnam`}> Vietnam</option>
                <option value={`cambodia`}>Cambodia</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter your location"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter short desctiption"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Average Cost</span>
              </label>
              <input
                type="text"
                name="averagecost"
                placeholder="Enter average cost"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Travel Time</span>
              </label>
              <input
                type="time"
                name="traveltime"
                placeholder="Enter travel time"
                className="input input-bordered"
                defaultValue={`13:30`}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Per Year Visitors</span>
              </label>
              <input
                type="text"
                name="visitorrs"
                placeholder="Enter per year visitors"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Setionality</span>
              </label>
              <select
                className="select select-primary w-full"
                value={seasonality}
                onChange={(e)=>setSeastionality(e.target.value)}
              >
                <option value={`summer`}>Summer</option>
                <option value={`rainy-season`}>Rainy-season</option>
                <option value={`autumn`}>Autumn</option>
                <option value={`late-autumn`}>Late-autumn</option>
                <option value={`winter`}>Winter</option>
                <option value={`spring`}>Spring</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-5">
            <input type="submit" value="Add Tourist Spot" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
