import React, { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., call an API to save the data)
        console.log("Form data submitted:", formData);
    };

    return (
        <div className="h-screen w-full bg-pink-400 flex justify-center items-center">
            <div className="bg-blue-400 h-4/5 w-1/2 flex flex-row rounded-lg shadow-lg">
                <div className="h-full w-1/4 bg-green-300 rounded-l-lg p-6">
                    {/* You can add an image or any other content here */}
                    <h2 className="text-2xl text-white text-center">Sign Up</h2>
                </div>
                <div className="h-full w-3/4 p-6 flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-white mb-2">
                                Your Name:
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                                className="w-full rounded-xl py-2 px-4"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-white mb-2">
                                Your Email:
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                                className="w-full rounded-xl py-2 px-4"
                            />
                        </div>

                        {/* Age */}
                        <div>
                            <label htmlFor="age" className="block text-white mb-2">
                                Your Age:
                            </label>
                            <input
                                id="age"
                                name="age"
                                type="number"
                                value={formData.age}
                                onChange={handleChange}
                                required
                                placeholder="Enter your age"
                                className="w-full rounded-xl py-2 px-4"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label htmlFor="gender" className="block text-white mb-2">
                                Your Gender:
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl py-2 px-4"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-white mb-2">
                                Your Phone Number:
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                                className="w-full rounded-xl py-2 px-4"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-700"
                            >
                                Submit
                            </button>
                        </div>
                        <div>
                            <Link to='/login' className="text-white cursor-pointer hover:underline" >Already have an account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
