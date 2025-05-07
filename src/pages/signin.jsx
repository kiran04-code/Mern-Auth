import React from "react";
import Navbar from "../components/navbar";
const Signin = () => {
  return (
   <div>
    <Navbar/>
     <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
   <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
     <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
     <form className="space-y-4">
       <div>
         <label className="block text-gray-700 mb-1">Email</label>
         <input
           type="email"
           placeholder="Enter your email"
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>
       <div>
         <label className="block text-gray-700 mb-1">Password</label>
         <input
           type="password"
           placeholder="Enter your password"
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       </div>
       <button
         type="submit"
         className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
       >
         Login
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
     </p>
   </div>
 </div></div>
  );
};

export default Signin;
