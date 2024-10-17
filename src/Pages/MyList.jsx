import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const MyList = () => {
  const emailTouristSopts = useLoaderData();
  const [touristSpots, setTouristSpots] = useState(emailTouristSopts);
  const navigate = useNavigate();
  console.log(emailTouristSopts);
  const handleDeleteFromMyList = (spotId) => {
    console.log(spotId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const delteSpecificIdtoServer = async () => {
          const response = await fetch(`http://localhost:5000/delete/${spotId}`, {
            method: "DELETE",
          });
          const result = await response.json();
          if(result.deletedCount === 1){
            const remainingTourisSpots = touristSpots.filter((spot)=> spot._id !== spotId);
            setTouristSpots(remainingTourisSpots);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
          else{
            toast.error("error is occured when deleted!")
          }
        };
        delteSpecificIdtoServer();
        
      }
    });
};

const handleEditFormMylist = (spotId) => {
  navigate(`/edit/${spotId}`);
}
  return (
    <div className="overflow-x-auto my-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Sopt Name:</th>
            <th>Location:</th>
            <th>Email:</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {touristSpots.map((emailSpot, idx) => (
            <tr key={emailSpot._id}>
              <th>{idx + 1}</th>
              <td>{emailSpot.touristSoptName}</td>
              <td>{emailSpot.tourisSpotLocation}</td>
              <td>{emailSpot.userEmail}</td>
              <td>
                <button
                  onClick={() => handleDeleteFromMyList(emailSpot._id)}
                  className="btn mr-2 bg-red-400 text-white"
                >
                  <MdDelete className="text-2xl" />
                </button>
                <button onClick={()=>handleEditFormMylist(emailSpot._id)} className="btn bg-green-400 text-white">
                  <FaRegEdit className="text-2xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
