import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Login () {
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value,
        }));
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="h-1/2 absolute w-1/4 py-5 flex bg-[#2a3bbf] flex-row justify-center items-center rounded-xl">
                <div className="bg-transparent h-full w-full ">
                    {/* username */}
                        <form action="" className="flex flex-col space-y-5 items-center justify-center">
                            <div>
                            <label htmlFor="email" className="block text-white mb-2">
                                Your email:
                            </label>
                                <input id='email' name='email' required type="email" placeholder="cherry@gmail.com" className="rounded-xl py-2 px-5 hover:border hover:border-gray-400 hover:border-xl" />
                            </div>
                            <div>
                            <label htmlFor="password" className="block text-white mb-2">
                                Your Password:
                            </label>
                                <input id="password"  name="password" required type="password" className="rounded-xl py-2 px-5 hover:border hover:border-gray-400 hover:border-xl" placeholder="pass_word@xyz" />

                            </div>
                            <div>
                                <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Link to='/signup' className='text-white cursor-pointer hover:underline' >
                                    Don't have an account?
                                </Link>
                                <Link to='/forgotPasssword' className='text-white cursor-pointer hover:underline' >
                                    Forgot Password?
                                </Link>

                            </div>
                            
                        </form>
                    {/* password */}
                </div>
                
           </div>
        </div>
    );
}

export default Login;