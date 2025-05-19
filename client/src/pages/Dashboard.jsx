import React from "react";
import MainLayout from "../layouts/MainLayout";

const Dashboard = () => {
  const user = "User";

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="card bg-gradient-to-r from-blue-600 to-blue-900 text-white p-6 rounded-3xl shadow-xl h-full">
            <h2 className="text-xl font-bold">Hi {user}</h2>
            <p className="text-sm text-teal-100 mt-1">
              Managing your assest with ease.
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="card bg-white border border-gray-200 p-6 rounded-3xl shadow-xl h-full">
            <h2 className="text-xl font-semibold text-gray-800">Overview / Next Section</h2>
            <p className="text-sm text-gray-500 mt-1">
              
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
