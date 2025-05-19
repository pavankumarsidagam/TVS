import React from "react";
import MainLayout from "../layouts/MainLayout";



const Locations = () => {
    return (
        <MainLayout>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <div className="card bg-white border border-gray-200 p-6 rounded-3xl shadow-xl h-full">
                        <h2 className="text-xl font-semibold mb-4 text-blue-800">Locations</h2>

                        <form className="space-y-6 pt-4">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Location Code</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Enter Location Code"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Site Code</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Enter Site Code"
                                        required
                                    />
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
                        <h2 className="text-xl font-semibold mb-4 text-blue-800">Locations List</h2>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Locations;
