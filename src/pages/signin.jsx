import React,{useState} from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { SignInStart,SignInSucess,SignInfail } from "../redux/createSlice/slice";
import {useDispatch ,useSelector} from "react-redux"
const Signin = () => {
  const dispatch = useDispatch()
  const naviagte = useNavigate()
   const [fromData, setFormData] = useState({})
    const [responseData, setResponseData] = useState(null);
    const {loading,error} = useSelector(state=>state.user)
    const handleChange = (e) => {
      setFormData({...fromData,[e.target.id]: e.target.value});
    }
    const handleSubmit = async (e)=>{
      e.preventDefault();
    try {
       
      dispatch(SignInStart())
      const res = await fetch('/api/signin',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fromData),
     })
      const data = await res.json()
      setResponseData(data)
      dispatch(SignInSucess(data))
      // naviagte("/")
    } catch (error) {
     consol.log(dispatch(SignInfail(data.error)))
    }
   }
  return (

   <div>
    <Navbar/>
     <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
   <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
     <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
     <form  onSubmit={handleSubmit} className="space-y-4">
       <div>
         <label className="block text-gray-700 mb-1">Email</label>
         <input
           type="email"
            id="email"
           onChange={handleChange}
           placeholder="Enter your email"
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>
       <div>
         <label className="block text-gray-700 mb-1">Password</label>
         <input
           type="password"
            id="password"
            onChange={handleChange}
           placeholder="Enter your password"
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>
       <button  disabled={loading}
         type="submit"
         className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
       >
          {
            loading ? "Loading..." : "Sign Up"
           }
       </button>
     </form>

     <div className="my-4 flex items-center justify-center">
       <span className="text-gray-500 text-sm">or</span>
     </div>

     <button
       className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition duration-200"
     >
       <img
         src="https://www.svgrepo.com/show/475656/google-color.svg"
         alt="Google"
         className="w-5 h-5"
       />
       <span className="text-sm text-gray-700">Login with Google</span>
     </button>

     <p className="text-sm text-center mt-4 text-gray-600">
       Don't have an account?{" "}
       <a href="/signup" className="text-blue-600 hover:underline">
         Sign Up
       </a>
       {error && (
  <span className="text-red-600">
    {error || "Something went wrong"}
  </span>
)}

     </p>
  
   </div>
 </div></div>
  );
};

export default Signin;
