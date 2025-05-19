import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiUser,
  FiMenu,
  FiHome,
  FiList,
  FiDollarSign,
  FiLogOut,
} from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", to: "/", icon: <FiHome /> },
  { name: "Locations", to: "/locations", icon: <FiList /> },
  { name: "Assest", to: "/assest", icon: <FiDollarSign /> },
  { name: "Transactions", to: "/transactions", icon: <FiUser /> },
  { name: "Transactions Assests", to: "/transactions-assests", icon: <FiUser /> },
];

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [animate, setAnimate] = useState("slideUp");
  const [mobileVisible, setMobileVisible] = useState(false);
  const accountRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setShowAccountMenu(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".menu-button")
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle mobile menu animation and unmount
  useEffect(() => {
    if (showMobileMenu) {
      setMobileVisible(true);
      setAnimate("slideUp");
    } else {
      setAnimate("slideDown");
      setTimeout(() => setMobileVisible(false), 300);
    }
  }, [showMobileMenu]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 
        w-[95%] max-w-7xl xl:max-w-screen-2xl 2xl:max-w-[1600px]
        bg-white
        text-black rounded-2xl shadow-xl 
        px-6 py-4 
        backdrop-blur-md bg-opacity-80 
        flex justify-between items-center 
        z-50 transition-all duration-300">

        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold font-poppins">
          <img src="/TVS_Motor_logo.svg.png" alt="Logo" className="h-8 w-100" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base items-center font-inter">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`hover:text-blue-800 ${
                location.pathname === item.to ? "text-blue-800" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Account Dropdown */}
          <div ref={accountRef} className="relative">
            <FiUser
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              className="h-6 w-6 cursor-pointer hover:text-blue-800"
            />
            <div
              className={`absolute right-0 mt-2 w-48 z-20 transform transition-all duration-300 ease-in-out ${
                showAccountMenu
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl py-2 px-2 text-sm text-black">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <FiUser /> Profile
                </Link>
                <Link
                  to="/logout"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <FiLogOut /> Logout
                </Link>
              </div>
            </div>
          </div>

          {/* Hamburger for small screen */}
          <div className="md:hidden menu-button">
            <FiMenu
              onClick={() => setShowMobileMenu((prev) => !prev)}
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide Up/Down */}
      {mobileVisible && (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-black bg-opacity-40">
          <div
            ref={mobileMenuRef}
            className={`w-[90%] max-w-md h-[60%] bg-white text-gray-800 
                      rounded-3xl shadow-2xl p-6 text-lg font-semibold font-inter 
                      transform transition-all duration-300 ease-in-out 
                      overflow-y-auto animate-${animate}`}
          >
            <div className="flex flex-col space-y-6 items-center justify-center h-full">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setShowMobileMenu(false)}
                  className={`flex items-center gap-2 ${
                    location.pathname === item.to ? "text-teal-600" : ""
                  }`}
                >
                  {item.icon} {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
