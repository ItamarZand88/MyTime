import React from "react";
import {
  ArrowUpIcon,
  CheckIcon,
  ClockIcon,
  HomeIcon,
  CalendarIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
      <div>
        <HomeIcon width={40} className="text-gray-300 left-3 sm:left-6 fixed" />
      </div>
      <div className="fixed left-3 sm:left-6 top-[100px]">
        <CheckIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <CalendarIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <ClockIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
      </div>
      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          />
        </a>
        <LogoutIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 cursor-pointer"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Sidebar;
