import React, { useState } from "react";
import { Link } from "react-router-dom";

function CompanyRegister() {
    const [companyName, setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPassword, setCompanyPassword] = useState("");
    const [confirmCompanyPassword, setConfirmCompanyPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (companyPassword !== confirmCompanyPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post("http://localhost:5000/Register", {
                username: companyName, // ใช้ companyName แทน username
                email: companyEmail, // ใช้ companyEmail แทน email
                password: companyPassword, // ใช้ companyPassword แทน password
            });
            console.log(response.data.message);
            // รับข้อมูลเมื่อลงทะเบียนเรียบร้อยแล้ว
        } catch (error) {
            console.error("Registration error:", error.message);
            setErrorMessage("Registration error: " + error.message);
        }
    };

    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Company Register</h2>
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-4">
                        <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name</label>
                        <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete="organization" />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyEmail" className="block text-gray-700 font-bold mb-2">Company Email</label>
                        <input type="email" id="companyEmail" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete="email" />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="companyPassword" className="block text-gray-700 font-bold mb-2">Company Password</label>
                        <input type="password" id="companyPassword" value={companyPassword} onChange={(e) => setCompanyPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete="new-password" />

                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmCompanyPassword" className="block text-gray-700 font-bold mb-2">Confirm Company Password</label>
                        <input type="password" id="confirmCompanyPassword" value={confirmCompanyPassword} onChange={(e) => setConfirmCompanyPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete="new-password" />

                    </div>
                    {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Register
                        </button>
                        <Link to="/CompanyLogin" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CompanyRegister;