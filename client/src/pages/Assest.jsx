import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

const Assest = () => {
    const [siteCodes, setSiteCodes] = useState([]);
    setTimeout(() => {
        console.log(siteCodes);
    }, 3000);

    useEffect(() => {
        const sampleSites = [
            { id: 1, code: "SITE01" },
            { id: 2, code: "SITE02" },
            { id: 3, code: "SITE03" },
        ];
        setSiteCodes(sampleSites);
    }, []);

    return (
        <MainLayout>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <div className="card bg-white border border-gray-200 p-6 rounded-3xl shadow-xl h-full">
                        <h2 className="text-xl font-semibold mb-4 text-blue-800">Assests</h2>
                        
                        <form className="space-y-6 pt-4">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Assest Number</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Enter Assest Number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Site Code</label>
                                    <select
                                        className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    >
                                        <option value="">Select Site Code</option>
                                        {siteCodes.map((code) => (
                                            <option key={code.id} value={code.id}>
                                                {code.code}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="bg-blue-800 hover:bg-blue-600 text-white font-medium py-1 px-5 rounded-lg transition duration-200"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-span-12">
                    <div className="card bg-white border border-gray-200 p-6 rounded-3xl shadow-xl h-full">
                        <h2 className="text-xl font-semibold mb-4 text-blue-800">Assests List</h2>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Assest;