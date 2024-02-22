import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "Leanne Graham",
  },

  {
    name: "Dutch Bag",
  },
  {
    name: "Duffet Bag",
  },
  {
    name: "Messenger Bag",
  },
  {
    name: "Clutch Bag",
  },
  {
    name: "Hand Bag",
  },

  {
    name: "Backpak School Bag",
  },
  {
    name: "Envelope Bag ",
  },
  {
    name: "Formal Belt",
  },
  {
    name: "Toothed  Belt",
  },
  {
    name: "V belt",
  },
  {
    name: "Flat Belt",
  },
  {
    name: "Round Belt",
  },
  {
    name: "Chelsey Dietrich",
  },
  {
    name: "Keebler LLC",
  },
  {
    name: "Mrs. Dennis Schulist",
  },
  {
    name: "Considine-Lockman",
  },
  {
    name: "Kurtis Weissnat",
  },
  {
    name: "Johns Group",
  },
  {
    name: "Nicholas Runolfsdottir V",
  },
  {
    name: "Abernathy Group",
  },
  {
    name: "Glenna Reichert",
  },
  {
    name: "Yost and Sons",
  },
  {
    name: "Clementina DuBuque",
  },
  {
    name: "Hoeger LLC",
  },
];

export default function MySearchSuggestion() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search", searchTerm);
  };

  return (
    <div>
      <div className="flex w-[38vw] justify-between  ">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="search products"
          className=" w-[31vw] h-8 border-[1px]  border-slate-300 pl-8   outline-none rounded-md "
        />
        <CiSearch className="absolute left-3 top-3 text-xl " />
        <NavLink to="/result">
          <div className="w-[6vw] h-8 ">
            <button
              onClick={() => onSearch(value)}
              className=" bg-orange-400 w-[83px] h-8 rounded-[4px] text-l text-white shadow-md hover:opacity-75"
            >
              SEARCH
            </button>
          </div>
        </NavLink>
        <div className="absolute top-9 bg-white z-10 w-[31vw] text-xl border cursor-pointer">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const forName = item.name.toLowerCase();

              return (
                searchTerm &&
                forName.includes(searchTerm) &&
                forName !== searchTerm
              );
            })
            .map((item) => (
              <div onClick={() => onSearch(item.name)} key={item.name}>
                {item.name}
              </div>
              // adding key={item.name} helps to eliminate the console red sign that says each child in a list should have a unique key prop
            ))}
        </div>
      </div>
    </div>
  );
}
