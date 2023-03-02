import Head from "next/head";
import { useContext, useState } from "react";
import { Web3Context } from "../context/contextProvider";

const Home = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [id, setId] = useState("");
  const [joinAmount, setJoinAmount] = useState("");
  const [commitId, setCommitId] = useState("");
  const [moveId, setMoveId] = useState("");
  const [word, setWord] = useState("");
  const [rid, setRid] = useState("");
  const [rmoveId, setRmoveId] = useState("");
  const [rword, setRword] = useState("");
  const { start, join, commit, reveal } = useContext(Web3Context);
  return (
    <>
      <Head>
        <title>Rock Paper Scissor</title>
        <meta name="description" content="WEB3 front end" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className=" w-full h-screen flex flex-col">
        <div className="flex flex-row justify-evenly lg:justify-center lg:space-x-14 items-center mt-12 lg:mt-7 mb-8">
          <div className="flex flex-col items-center justify-evenly  w-48 sm:w-52 lg:w-72 lg:h-60 bg-fuchsia-300 h-44 sm:h-48 rounded-xl shadow-md hover:shadow-lg hover:bg-fuchsia-200">
            <h2 className="font-semibold font-serif text-sm sm:font-bold lg:text-lg lg:font-extrabold">
              Start Double Player RPS!
            </h2>
            <input
              type="text"
              className="bg-transparent outline outline-blue-400 text-center w-[180] lg:w-64 lg:h-8 rounded-lg "
              placeholder="Enter opponent's address"
              value={address}
              onChange={({ target }) => setAddress(target?.value)}
            />
            <input
              type="number"
              className="bg-transparent outline outline-blue-400 text-center w-44 lg:w-64 lg:h-8 rounded-lg"
              placeholder="Enter amount to Stake"
              value={amount}
              onChange={({ target }) => setAmount(target?.value)}
            />
            <button
              type="button"
              className="w-14 lg:w-20 lg:font-extrabold lg:text-lg bg-pink-600 font-bold rounded-lg font-serif hover:bg-pink-800"
              onClick={() => start(address, amount)}
            >
              Start
            </button>
          </div>
          <div className="flex flex-col justify-evenly items-center w-48 sm:w-52 bg-fuchsia-300 h-44 sm:h-48 lg:w-72 lg:h-60 rounded-xl shadow-md hover:shadow-lg hover:bg-fuchsia-200">
            <h2 className="font-semibold font-serif text-sm lg:text-lg lg:font-extrabold sm:font-bold">
              Join & Confirm the Game!
            </h2>
            <input
              type="number"
              className="bg-transparent outline outline-blue-400 text-center w-[180] lg:w-64 lg:h-8 rounded-lg "
              placeholder="Enter Expected Id no"
              value={id}
              onChange={({ target }) => setId(target?.value)}
            />
            <input
              type="number"
              className="bg-transparent outline outline-blue-400 text-center w-[176] lg:w-64 lg:h-8 rounded-lg"
              placeholder="Enter Expected amount"
              value={joinAmount}
              onChange={({ target }) => setJoinAmount(target?.value)}
            />
            <button
              type="button"
              className="w-14 lg:w-20 lg:text-lg lg:font-extrabold bg-pink-600 font-bold rounded-lg font-serif hover:bg-pink-800"
              onClick={() => join(id, joinAmount)}
            >
              Join
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-evenly lg:justify-center lg:space-x-14 items-center mt-6 sm:mt-5">
          <div className="flex flex-col justify-evenly items-center w-48 sm:w-52 sm:h-48 lg:w-72 lg:h-60 bg-fuchsia-300 h-44 rounded-xl shadow-md hover:shadow-lg hover:bg-fuchsia-200">
            <h2 className="font-semibold font-serif text-sm lg:text-lg lg:font-extrabold sm:font-bold">
              Commit & Secure Move
            </h2>
            <input
              type="number"
              className="bg-transparent outline outline-blue-400 text-center w-[180] lg:w-64 lg:h-8 rounded-lg "
              placeholder="Enter Expected Id no"
              value={commitId}
              onChange={({ target }) => setCommitId(target?.value)}
            />
            <input
              type="number"
              className="bg-transparent outline outline-blue-400 text-center w-[180] lg:w-64 lg:h-8 rounded-lg "
              placeholder="Enter Your Move"
              value={moveId}
              onChange={({ target }) => setMoveId(target?.value)}
            />
            <input
              type="text"
              className="bg-transparent outline outline-blue-400 text-center w-[176] lg:w-64 lg:h-8 rounded-lg"
              placeholder="Provide an Extra Words"
              value={word}
              onChange={({ target }) => setWord(target?.value)}
            />
            <button
              type="button"
              className="w-20 lg:w-28 lg:font-extrabold lg:text-lg bg-pink-600 font-bold rounded-lg font-serif hover:bg-pink-800"
              onClick={() => commit(commitId, moveId, word)}
            >
              Commit
            </button>
          </div>
          <div className="flex flex-col justify-evenly items-center w-48 lg:w-72 lg:h-60 sm:w-52 sm:h-48 bg-fuchsia-300 h-44 rounded-xl shadow-md hover:shadow-lg hover:bg-fuchsia-200">
            <h2 className="font-semibold font-serif text-sm lg:text-lg lg:font-extrabold sm:font-bold">
              Reveal & get the Winner!
            </h2>
            <input
              type="number"
              className="bg-transparent outline outline-blue-400 text-center w-[180] lg:w-64 lg:h-8 rounded-lg "
              placeholder="Enter Expected Id no"
              value={rid}
              onChange={({ target }) => setRid(target?.value)}
            />
            <input
              type="number"
              className="bg-transparent outline outline-blue-400 text-center w-[176] lg:w-64 lg:h-8 rounded-lg"
              placeholder="Enter Expected Move"
              value={rmoveId}
              onChange={({ target }) => setRmoveId(target?.value)}
            />
            <input
              type="text"
              className="bg-transparent outline outline-blue-400 text-center w-[176] lg:w-64 lg:h-8 rounded-lg"
              placeholder="Enter Expected Words"
              value={rword}
              onChange={({ target }) => setRword(target?.value)}
            />

            <button
              type="button"
              className="w-16 lg:w-24 lg:text-lg lg:font-extrabold bg-pink-600 font-bold rounded-lg font-serif hover:bg-pink-800"
              onClick={() => reveal(rid, rmoveId, rword)}
            >
              Reveal
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
