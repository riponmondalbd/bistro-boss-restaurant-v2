import {
  FaCalendar,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { FaCalendarCheck, FaRankingStar } from "react-icons/fa6";
import { IoMail, IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu w-full p-4 space-y-3">
          {/* home */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/dashboard/userHome"}
            >
              <FaHome />
              User Home
            </NavLink>
          </li>
          {/* reservation */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/dashboard/reservation"}
            >
              <FaCalendar />
              Reservation
            </NavLink>
          </li>

          {/* cart */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/dashboard/cart"}
            >
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          {/* review */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/dashboard/review"}
            >
              <FaRankingStar />
              Add Review
            </NavLink>
          </li>
          {/* bookings */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/dashboard/bookings"}
            >
              <FaCalendarCheck />
              My Bookings
            </NavLink>
          </li>
          {/* divider */}
          <div className="divider divider-accent"></div>
          {/* home */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/"}
            >
              <FaHome />
              Home
            </NavLink>
          </li>
          {/* menu */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/order/salads"}
            >
              <IoMenu />
              Menu
            </NavLink>
          </li>
          {/* shop */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/shop"}
            >
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>
          {/* contact */}
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
              })}
              to={"/contact"}
            >
              <IoMail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
