import { CiSearch } from "react-icons/ci";
import ButtonSearch from "./ButtonSearch";

function SearchInputAndBtn() {
  return (
    <>
      <div className="flex w-[38vw] justify-between  ">
        {/* this is my search input and search button put together */}

        {/* my search input */}
        <input
          type="text"
          placeholder=" search products"
          className=" w-[31vw] h-8 border-[1px]  border-slate-300 pl-8   outline-none rounded-md "
        />
        <CiSearch className="absolute left-3 top-3 text-xl " />
        {/* my search  button */}
        <ButtonSearch />
      </div>
    </>
  );
}

export default SearchInputAndBtn;
