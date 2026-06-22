import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = ({
  setSearch,
  setSelectedDept,
  search,
  selectedDept,
  departments,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <div className="relative flex-1">
        <SearchIcon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          className="w-full pl-10!"
          placeholder="Search employees..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <select
        value={selectedDept}
        onChange={(e) => {
          setSelectedDept(e.target.value);
        }}
        className="max-w-40"
      >
        <option value="">All Departments</option>
        {departments.map((departmentName) => (
          <option key={departmentName} value={departmentName}>
            {departmentName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
