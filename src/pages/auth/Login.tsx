import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { LoginViewModel } from './SingInViewModel';
import Cookies from 'js-cookie';
import Loader from '../../components/loader/Loader';
import { Input } from 'antd';

// const model = LoginViewModel.instance;

const LoginPage = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    navigate('/dashboard');
    // try {
    //   setIsLoading(true);
    //   // Make a POST request to your authentication endpoint
    //   const response = await model.getLogin(email, password); // Corrected call
    //   const token = response.data.token; // Assuming the token is in the response
    //   Cookies.set('token', token);
    //   navigate('/dashboard');
    // } catch (error) {
    //   console.error('Login error:', error);
    // } finally {
    //   setIsLoading(false);
    // }
  };
 

  return (
    <>
      {!isLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          {/* Left Side - Banner Image (Hidden on Mobile) */}
        

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
            {/* <img
              src="icons/zebra_full_logo.png"
              alt="Logo"
              className="mb-9 w-[300px]"
            /> */}

            <h2 className="text-2xl text-center text-[#182627] font-poppins font-semibold mb-2">
              Login
            </h2>
            <h2 className="text-gray-400 font-poppins text-xl font-medium mb-8">
               login with your email and password !!
            </h2>

            <form className="w-full max-w-lg space-y-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="block font-medium text-[#182627]"
                >
                  Username or Email Address*
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-md p-4"
                  placeholder="Enter email address"
                  value={email} // Attach value to the state variable
                  onChange={(e) => setUsername(e.target.value)} // Attach onChange handler
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="block font-medium text-[#182627]"
                >
                  Password*
                </label>
                <div className="relative">
                  <Input.Password
                    id="password"
                    name="password"
                    className="w-full border rounded-md p-4"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
               
                </div>
              </div>

              <button
                // type=""
                className="w-full p-4  bg-black text-white rounded-md font-bold"
                onClick={handleLogin} // Call the handleLogin function on button click
              >
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default LoginPage;
