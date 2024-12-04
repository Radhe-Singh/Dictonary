import { FiBook } from "react-icons/fi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoIosPlayCircle } from "react-icons/io";
import { useState } from "react";
const Body = () => {
  const [search, setsearch] = useState();
  const [data, setdata] = useState();
  const [tog, settog] = useState("white");
  const togbtn = () => {
    if (tog === "white") {
      settog("red");
    } else {
      settog("white");
    }
  };

  const handleInput = (event) => {
    event.preDeafault;
    setsearch(event.target.value);
  };
  const func = async () => {
    const get = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    const data = await get.json();
    setdata(data[0]);
  };
  return (
    <div
      className={`flex justify-center items-center h-full w-full  ${
        tog === "white" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="h-[200vh] w-[700px] ring-4 ring-slate-200 drop-shadow-lg">
        <div className="flex">
          <FiBook className="m-2 h-10 w-10" />
        </div>
        <div className="mr-3 mt-[-55px] flex float-right">
          <div className="relative p-3">
            <button className="text-2xl  w-20 p-1 flex justify-center items-center  hover:bg-orange-400 border-r-2">
              serif <IoIosArrowDropdownCircle className="ml-2 h-7 w-7" />
            </button>
            <div className="hidden">
              <a href="#" className="block">
                Link 1
              </a>
              <a href="#" className="block">
                Link 2
              </a>
              <a href="#" className="block">
                Link 3
              </a>
            </div>
          </div>
          {/* code for toogle button */}

          {tog=='white' ? (
            <div
              className="light flex h-7 w-12 mt-5 bg-slate-600 rounded-full hover:cursor-pointer "
              onClick={togbtn}
            >
              <span className="h-7 w-7 bg-white rounded-full  overflow-hidden"></span>
            </div>
          ) : (
            <div
              className="light flex h-7 w-12 mt-5 bg-slate-600 rounded-full hover:cursor-pointer "
              onClick={togbtn}
            >
              <span className="h-7 w-7 bg-white rounded-full  overflow-hidden translate-x-5 duration-300"></span>
            </div>
          )}
          {/* moon icon */}
          <FiMoon className="h-8 w-20 mt-4" />
        </div>
        <div className="flex p-3 w-[500px] ml-12 mt-5 rounded-xl">
          <input
            type="search"
            name=""
            id=""
            className=" w-[100%] h-[100%] p-3 rounded-xl bg-slate-400"
            onChange={handleInput}
          />
          <button onClick={func}>
            <CiSearch className="ml-[-40px] mt-2 h-8 w-8" />
          </button>
        </div>

        {data ? (
          <div>
            <h1 className="ml-14 mt-10 text-4xl font-bold">{data?.word}</h1>
            <h6 className="ml-14 mt-2 text-xs text-blue-500 font-bold">
              {data?.phonetics[2]?.text}
            </h6>
            <IoIosPlayCircle className="float-right  mr-20 h-[80px] w-[100px] mt-[-50px]" />
            <hr className="mt-10 ml-20 " />
            <p className="mt-[-15px] ml-5 text-xl">
              {" "}
              {data?.meanings[0]?.partOfSpeech}
            </p>
            <h2 className="mt-[15px] ml-5 text-xl text-red-500">Meaning</h2>
            <div className="ml-20 mr-10 mt-3 justify-center items-center">
              <p className="text-wrap text-justify text-xs ">
                <ul className="list-disc">
                  <li>{data?.meanings[0]?.definitions[0]?.definition}</li>
                  {/*<li>{data.meanings[0].definitions[1].definition}</li>
                  <li>{data.meanings[0].definitions[2].definition}</li>*/}
                </ul>
              </p>
            </div>
            <h1 className="text-2xl mt-3 ml-4 text-red-500">
              Synomons :-{" "}
              <span className="text-xl text-blue-400">
                {data.meanings[0].synonyms[0]}
              </span>
            </h1>
            <hr className="mt-10 ml-20 " />
            <p className="mt-[-15px] ml-5 text-xl">
              {" "}
              {data?.meanings[1]?.partOfSpeech}
            </p>
            <h2 className="mt-[15px] ml-5 text-xl text-red-500">Meaning</h2>
            <div className="ml-20 mr-10 mt-3 justify-center items-center">
              <p className="text-wrap text-justify text-xs ">
                {data?.meanings[1]?.definitions[0]?.definition}
                <br />
                {data?.meanings[1]?.definitions[0]?.example}{" "}
              </p>
            </div>

            <hr className="mt-10" />

            <h1 className="text-xl mt-3 ml-4 text-red-500">
              Source :-{" "}
              <a href="" className="text-blue-700  text-xs">
                {data.sourceUrls[0]}
              </a>
            </h1>
          </div>
        ) : (
          <h1 className="text-4xl text-red-600 ml-5">Word is not found</h1>
        )}
      </div>
    </div>
  );
};
export default Body;
