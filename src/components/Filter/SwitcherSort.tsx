import React, { FC } from "react";
import { useActions } from "../../hooks/actions";

const SwitcherSort = () => {
  const { togglePopularSwitch, toggleRatingSwitch } = useActions();

  const onTogglePopularSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    togglePopularSwitch();
  };
  const onToggleRatingSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleRatingSwitch();
  };

  return (
    <div className="my-8">
      <p className="text-center text-xl font-medium mb-4">Sorts</p>
      <label className="flex" htmlFor="electronics">
        <input onChange={onTogglePopularSwitch} className="mr-2" type="checkbox" name="Sort by popular" />
        <span className="whitespace-nowrap">Sort by popular</span>
      </label>
      <label className="flex" htmlFor="electronics">
        <input onChange={onToggleRatingSwitch} className="mr-2" type="checkbox" name="Sort by rating" />
        <span className="whitespace-nowrap">Sort by rating</span>
      </label>
    </div>
  );
};

export default SwitcherSort;
