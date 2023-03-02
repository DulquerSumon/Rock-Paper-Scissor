/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import React, { useContext } from "react";

import { Web3Context } from "../context/contextProvider";

const Button = () => {
  const { connect, currentAccount } = useContext(Web3Context);
  return (
    <div
      onClick={connect}
      className="bg-blue-500 hover:bg-blue-700 w-28 text-center rounded-full "
    >
      <button type="button">
        {currentAccount
          ? `${currentAccount.slice(0, 4)}...${currentAccount.slice(
              // eslint-disable-next-line indent
              // eslint-disable-next-line comma-dangle, indent
              currentAccount.length - 3
              // eslint-disable-next-line indent
            )}`
          : "connect"}
      </button>
    </div>
  );
};

export default Button;
