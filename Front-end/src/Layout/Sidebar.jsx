import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
export default function Navbar() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div className="w-max p-2.5">
                <img src={Logo} className="w-32" />
              </div>
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max">
                  <Link
                    to="/"
                    aria-label="dashboard"
                    className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                  >
                    <i className="text-xl text-white bx bxs-home -ml-1 h-6 w-6"></i>
                    <span className="-mr-1 font-medium">Home</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/contact"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <i className="bx bx-support h-5 w-5  text-2xl text-black"></i>
                    <span className="group-hover:text-gray-700">
                      Contact Us
                    </span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link
                    to="/about"
                    href="#"
                    className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <i className="bx bxs-group h-5 w-5 text-2xl text-black"></i>
                    <span className="group-hover:text-gray-700">About us</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-max -mb-3">
              <Link
                to="/login"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
              >
                <i className="bx bx-log-in h-5 w-5 group-hover:fill-cyan-600 text-2xl"></i>
                <span className="group-hover:text-gray-700 text-center mt-2 text-2xl">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
