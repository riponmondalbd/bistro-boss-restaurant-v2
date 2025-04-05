import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaCalendarCheck, FaRankingStar } from "react-icons/fa6";
import { IoMail, IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO:get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu w-full p-4 space-y-3">
          {isAdmin ? (
            <>
              {/* admin data */}
              {/* admin home */}
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}
                  to={"/dashboard/adminHome"}
                >
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              {/* add items */}
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}
                  to={"/dashboard/addItems"}
                >
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>

              {/* manage items */}
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}
                  to={"/dashboard/manageItems"}
                >
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              {/* manage bookings */}
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}
                  to={"/dashboard/bookings"}
                >
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              {/* all users */}
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                  })}
                  to={"/dashboard/users"}
                >
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* user data */}
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
                  My Cart ({cart.length})
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
            </>
          )}
          {/* shared nav links */}
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
