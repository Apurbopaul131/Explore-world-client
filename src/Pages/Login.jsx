import { sendEmailVerification } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../Context/AuthContex";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { loginUser, loginWithGoogle, loginWithGitHub, resetPassword } = useContext(FirebaseContext);
  const forgetPassEmail = useRef();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userEmail = formData.get("email");
    const userPassword = formData.get("password");

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)) {
      toast.error("Your email is not valid...");
      return;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(
        userPassword
      )
    ) {
      toast.error(
        "Password must be contains one uppercase,lowercase and at least six chcaracter..."
      );
      return;
    }

    //Singin with user email and password
    loginUser(userEmail, userPassword)
      .then((userCredential) => {
        if (userCredential.user.emailVerified) {
          console.log(userCredential.user);
          toast.success(`${userCredential.user.email} signin successfully.`);
          e.target.reset();
          //navigate to expected location
          navigate(location? location.state : "/")
        } else {
          console.log(userCredential.user);
          //Email verification
          sendEmailVerification(userCredential.user).then(() => {
            console.log("email verification sent..");
          });
          toast.error(`Verify email to ${userCredential.user.email}`);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  //handle google login
  const handleGoogleLogin = () =>{
    loginWithGoogle()
    .then((result) => {
        console.log(result.user);
        toast.success(`Login succesfylly with ${result.user.email}`);

        //navigate to expected location
        navigate(location? location.state : "/")
      })
      .catch((err)=>{
        toast.error(err.message);
      })
  }

  //call function when click google signin button
  const handleGithubLogin = () =>{
    loginWithGitHub()
    .then((result) => {
        console.log(result.user);
        toast.success(`Login succesfylly with ${result.user.email}`);

        //navigate to expected location
        navigate(location? location.state : "/")
      })
      .catch((err)=>{
        toast.error(err.message.value);
      })
  }

  const handleForgetPassword = () =>{
    const Email = forgetPassEmail.current.value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)) {
        toast.error("Your email is not valid...");
        return;
    }
    resetPassword(Email)
    .then(() => {
        toast.success(`Password reset email sent to ${Email}!`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
    return (
        <div className="space-y-3 my-5">
            <Toaster/>
        <h1 className="text-3xl font-bold text-center text-[#131313">
          User Login
        </h1>
        <form className="card-body mx-auto md:w-2/4" onSubmit={handleLoginSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              ref={forgetPassEmail}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute right-3 top-14"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            <label className="label">
              <a className="label-text-alt link link-hover" onClick={handleForgetPassword}>
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="btn bg-[#59C6D2] text-white"
            />
          </div>
        </form>
        <p className="text-center">
          You do not have an accout?{" "}
          <Link to={`/registration`}>
            <button className="btn btn-sm bg-[#23BE0A] text-white">
              Sign UP
            </button>
          </Link>
        </p>
        <div className="mx-auto md:w-2/4 flex justify-between p-8">
          <button className="btn btn-outline btn-primary" onClick={handleGoogleLogin}>
            <FaGoogle />
            <span>Google</span>
          </button>
          <button className="btn btn-outline btn-secondary" onClick={handleGithubLogin}>
            <FaGithub />
            <span>Github</span>
          </button>
        </div>
      </div>
    );
};

export default Login;