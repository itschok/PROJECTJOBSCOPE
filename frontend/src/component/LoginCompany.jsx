import React, { useState } from "react";
import { Link } from "react-router-dom";
function LoginCompany() {
    const [companyemail, setcompanyemail] = useState("");
    const [companypassword, setcompanypassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Axios.post("http://localhost:5000/login", {
                companyemail,
                companypassword,
            });
            console.log(response.data.message);
            // Redirect or perform other actions upon successful login
        } catch (error) {
            console.error("Login error:", error.response.data.message);
        }
    };
    return (
        <>
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Login</h2>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-4">
                    <label htmlFor="Email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="text" id="companyemail" value={companyemail} onChange={(e) => setcompanyemail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete="username" />

                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="companypassword" value={companypassword} onChange={(e) => setcompanypassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete="current-password" />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                    {/* Add links for registration or password reset */}
                    <Link to="/CompanyRegister" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Register
                    </Link>

                </div>
            </form>
        </div>
        </>
    );   
}
export default LoginCompany