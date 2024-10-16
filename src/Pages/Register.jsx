import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Context/AuthContex";


const Register = () => {
    const {createUser,loading} = useContext(FirebaseContext);
    console.log(loading);
    const [showPass,setShowPass] = useState(false);
    const handleRegistrationSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const userName = formData.get('name');
        const photoUrl = formData.get('photoUrl');
        const userEmail = formData.get('email');
        const userPassword = formData.get('password')
        console.log(userName,photoUrl,userEmail,userPassword);

        //Check valid email for clinet side 
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)){
        
            toast.error('Your email is not valid...');
            return;
        }

        //Verify password to client side
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(userPassword)){
            toast.error('Password must be contains one uppercase,lowercase and at least six character.');
            return;
        }
        
        //call firebase context function to create an new user
        createUser(userEmail,userPassword)
        .then((userCredential)=>{
          console.log(userCredential.user);
          sendEmailVerification(userCredential.user)
          .then(()=>{
            updateProfile(userCredential.user,{
               displayName: userName, 
               photoURL: photoUrl
            })
            .then(()=>{
              toast.success("Registration sucessfull.But must be verify email for login..")
              e.target.reset();
            })
            .catch((error)=>{
              console.log(error)
            })
          })
        })
        .catch((error)=>{
          const errorMessage = error.message;
          console.log(errorMessage);
        })
    }
    return (
        <div className="space-y-3 my-5">
            <Toaster/>
            <h1 className="text-3xl font-bold text-center text-[#131313">User Registration</h1>
            <form className="card-body mx-auto md:w-1/3" onSubmit={handleRegistrationSubmit}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" name="photoUrl" placeholder="PhotoUrl" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
          <span className="absolute right-3 top-2/3" onClick={()=>setShowPass(!showPass)}>{showPass ? <FaRegEyeSlash /> : <FaRegEye />}</span>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Registration" className="btn bg-[#59C6D2] text-white" />
        </div>
      </form>
       <p className="text-center">You have already an accont? <Link to={`/login`}><button className="btn btn-sm bg-[#23BE0A] text-white">Sign In</button></Link></p>
       <div>

       </div>
        </div>
    );
};

export default Register;