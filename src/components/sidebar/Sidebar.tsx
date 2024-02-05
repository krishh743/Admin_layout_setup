import { Menu } from "antd";
import { MdDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/krishna_k.png";
import Cookies from "js-cookie";
// import LOGIN_ICON from '../assets/icons/login.png';
import { BsBookHalf } from "react-icons/bs";


const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      path: "/dashboard",
      icon: <MdDashboard style={{ fontSize: "20px" }} />,
      label: "Dashboard",
    },
    {
      path: "/settings",
      icon: <BsBookHalf style={{ fontSize: "20px" }} />,
      label: "Settings",
    },

    // Add other menu items here if needed
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div
      className="flex flex-col justify-between gap-4 text-white p-4 py-8"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <div>
        <div className="text-center">
          <img src={Logo} alt="Logo" className="h-full" />
        </div>

        <Menu
          style={{ backgroundColor: "black" }}
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          selectedKeys={[location.pathname]}
          onSelect={({ key }) => handleMenuClick(key as string)}
        >
          {menuItems.map(({ path, icon, label }) => (
            <Menu.Item
              key={path}
              icon={React.cloneElement(icon, {
                style: {
                  fontSize: "20px",
                  color: location.pathname === path ? "#000" : "white",
                },
              })}
              className={`mb-2 ${
                location.pathname === path ? "ant-menu-item-selected" : ""
              }`}
              style={{
                backgroundColor:
                  location.pathname === path ? "#ffff" : "transparent",
              }}
            >
              <NavLink
                to={path}
                className="font-semibold text-lg"
                style={{
                  color: location.pathname === path ? "black" : "white",
                }}
              >
                {label}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </div>
      {/* Logout Button */}
      <Menu style={{ backgroundColor: "#fff", borderRadius: "10px" }}>
        <Menu.Item
          icon={<IoIosLogOut size={20} />}
          className="text-center"
          onClick={handleLogout}
        >
          <span className="font-semibold text-lg text-black rounded ">
            Logout
          </span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
