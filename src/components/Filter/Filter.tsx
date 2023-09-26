import React, { FC } from "react";

import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import SwitcherSort from "./SwitcherSort";

const Filter: FC = () => {
  return (
    <div className="border h-min min-w-[210px] mr-3 px-4 py-5 rounded bg-slate-50 shadow-md">
      <FilterCategory />
      <SwitcherSort />
      <FilterPrice />
    </div>
  );
};

export default Filter;
