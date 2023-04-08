import React from "react";
import { Search } from "react-feather";
import Icon from "./Icon";

function SearchInput() {
  return (
    <span className="relative">
      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 flex w-7 items-center justify-center  border-r border-r-slate-100"
      >
        <Icon icon={Search} />
      </span>
      <input
        placeholder="Search..."
        className={
          "w-32 sm:w-full pl-8 rounded-lg border border-slate-100 py-1 px-2 text-slate-800 transition-colors focus-within:bg-gray-50 hover:bg-gray-50 focus:border-gray-400 focus:outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-white dark:focus-within:bg-gray-900 dark:hover:bg-gray-900 dark:focus:border-gray-600"
        }
      />
    </span>
  );
}

export default SearchInput;
