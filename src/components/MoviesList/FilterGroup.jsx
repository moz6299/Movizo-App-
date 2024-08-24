import React from "react";
import './FilterGroup.css'

const FilterGroup = ({ minRate, handleFilter, rateArray }) => {
  return (
    <ul className="starlist">
      {rateArray.map((number, index) => (
        <li
          key={index}
          className={minRate === number ? "active" : ""}
          onClick={() => handleFilter(number)}
        >
          {number}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
