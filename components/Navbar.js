/* eslint-disable import/no-cycle */
import React from "react";
// import { useTheme } from "next-themes";
import { Button } from ".";

const Navbar = () => (
  // const { theme, setTheme } = useTheme();
  <div className="flex justify-around bg-[#90c9bf] border-b p-4 w-screen">
    <div className="text-purple-500  flex flex-row justify-between">
      <div className="w-8 text-center text-blue-700 font-serif text-sm border-2 border-pink-500 rounded-full bg-blue-400 mr-6">
        RPS
      </div>
      <div>
        <h1 className="font-bold lg:font-extrabold">Rock Paper Scissor</h1>
      </div>
    </div>

    <Button />
  </div>
);
export default Navbar;
