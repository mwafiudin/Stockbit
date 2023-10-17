import React, { useState } from "react";
import { ReactComponent as VisibleIcon } from "../../icons/visible.svg";
import { ReactComponent as NotVisibleIcon } from "../../icons/not-visible.svg";
import { Link } from "react-router-dom";

const UserSignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex mt-10 mb-11">
        <h1 className="text-pure-white text-2xl font-semibold">Sign In</h1>
      </div>
      <form className="mb-4">
        <div className="flex flex-col items-start">
          <label className="text-cuanbot-light-gray mb-3" htmlFor="emailOrPhone">
            Email / Mobile Number
          </label>
          <input
            type="text"
            id="emailOrPhone"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-cuanbot-green mb-[30px]"
            placeholder="Email / Mobile Number"
          />
        </div>

        <div className="flex mb-3">
          <label className="text-cuanbot-light-gray" htmlFor="password">
            Password
          </label>
        </div>
        <div className="flex items-start">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full mr-[-30px] px-4 py-2 border rounded focus:outline-none focus:border-cuanbot-green pr-10"
            placeholder="Password"
          />
          <div onClick={togglePasswordVisibility} className="cursor-pointer relative right-1 top-2">
            {showPassword ? <VisibleIcon /> : <NotVisibleIcon />}
          </div>
        </div>
      </form>

      <div className="flex mt-2 mb-10">
        <Link href="" className="text-cuanbot-green text-sm">
          Forgot password?
        </Link>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="bg-cuanbot-green py-4 flex-grow rounded-2xl">
          Sign In
        </button>
      </div>
    </>
  );
};

export default UserSignInForm;
