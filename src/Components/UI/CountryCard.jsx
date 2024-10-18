import PropTypes from "prop-types";
const CountryCard = ({country,handleCountryCard}) => {
    const {
        _id,
        countryName,
        image,
        description
    } = country;
    const cuttingDescription = country.description.split(" ");
    const newDes = `${cuttingDescription[0]} ${cuttingDescription[1]} ${cuttingDescription[2]} ${cuttingDescription[3]} ${cuttingDescription[4]} ${cuttingDescription[1]}...`
    console.log(_id,countryName,image,description);
    return (
        <div onClick={()=>handleCountryCard(countryName)} className="flex items-center gap-5 border-2 border-[#13131326] rounded-2xl p-6">
            <img src={image} alt="" className="w-28 rounded-md" />
            <div>
                <h1>Country:{countryName}</h1>
                <p>Description:{newDes}</p>
            </div>
        </div>
    );
};

export default CountryCard;
CountryCard.propTypes = {
    country:PropTypes.object.isRequired,
    handleCountryCard:PropTypes.func.isRequired
}