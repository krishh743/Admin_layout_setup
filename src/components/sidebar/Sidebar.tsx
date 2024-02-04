import { Menu } from 'antd';
import { MdDashboard } from 'react-icons/md';
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import Logo from '../assets/icons/LOGO .png';
import Cookies from 'js-cookie';
// import LOGIN_ICON from '../assets/icons/login.png';
import { BsBookHalf } from 'react-icons/bs';
import { MdOutlineInventory2 } from 'react-icons/md';
import { SiGooglemarketingplatform } from 'react-icons/si';
import { FaRankingStar } from 'react-icons/fa6';
import { VscPreview } from 'react-icons/vsc';
import { IoSettingsOutline } from 'react-icons/io5';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      path: '/dashboard',
      icon: <MdDashboard style={{ fontSize: '20px' }} />,
      label: 'Dashboard',
    },
    {
      path: '/settings',
      icon: <BsBookHalf style={{ fontSize: '20px' }} />,
      label: 'Settings',
    },
    
   
    // Add other menu items here if needed
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/');
  };

  return (
    <div
      className="flex flex-col justify-between gap-4 text-white p-4 py-8"
      style={{ backgroundColor: 'black', height: '100vh' }}
    >
      <div>
        <div className="text-center mb-8">
          {/* Replace 'company-logo.png' with your actual company logo */}
          {/* <img src={Logo} alt="Logo" /> */}
        </div>

        <Menu
          style={{ backgroundColor: 'black' }}
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
                  fontSize: '20px',
                  color: location.pathname === path ? '#FF5612' : 'white',
                },
              })}
              className={`mb-2 ${
                location.pathname === path ? 'ant-menu-item-selected' : ''
              }`}
              style={{
                backgroundColor:
                  location.pathname === path ? '#FFE4E1' : 'transparent',
              }}
            >
              <NavLink
                to={path}
                className="font-semibold text-lg"
                style={{
                  color: location.pathname === path ? '#FF5612' : 'white',
                }}
              >
                {label}
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </div>

      {/* Logout Button */}
      <Menu style={{ backgroundColor: '#FF5612', borderRadius: '10px' }}>
        <Menu.Item
          icon={
            <img
              // src={LOGIN_ICON}
              alt="Logout"
              style={{
                fontSize: '20px',
                color: 'white',
              }}
              width={23}
            />
          }
          className="text-center"
          onClick={handleLogout}
        >
          <span className="font-semibold text-lg text-white rounded">
            Logout
          </span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
