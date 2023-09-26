import React, { FC } from "react";
import { useActions } from "../../hooks/actions";

const FilterCategory: FC = () => {
  const { addCategory, removeCategory } = useActions();

  const onAddCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      addCategory(e.target.name);
    } else {
      removeCategory(e.target.name);
    }
  };

  return (
    <>
      <p className="text-center text-xl font-medium mb-4">Filters</p>
      <ul>
        <li>
          <label className="flex mb-1" htmlFor="electronics">
            <input onChange={onAddCategoryHandler} className="mr-2" type="checkbox" name="electronics" />
            <span>Electronics</span>
          </label>
        </li>
        <li>
          <label className="flex mb-1" htmlFor="electronics">
            <input onChange={onAddCategoryHandler} className="mr-2" type="checkbox" name="jewelery" />
            <span>Jewelery</span>
          </label>
        </li>
        <li>
          <label className="flex mb-1" htmlFor="electronics">
            <input onChange={onAddCategoryHandler} className="mr-2" type="checkbox" name="men's clothing" />
            <span>Men's clothing</span>
          </label>
        </li>
        <li>
          <label className="flex" htmlFor="electronics">
            <input onChange={onAddCategoryHandler} className="mr-2" type="checkbox" name="women's clothing" />
            <span className="whitespace-nowrap">Women's clothing</span>
          </label>
        </li>
      </ul>
    </>
  );
};

export default FilterCategory;
