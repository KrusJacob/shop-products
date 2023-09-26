import React, { FC, useEffect, useState } from "react";
import { useActions } from "../../hooks/actions";
import useDebounce from "../../hooks/debounce";

interface StateFilterPrice {
  min: string;
  max: string;
}

const FilterPrice: FC = () => {
  const [value, setValue] = useState<StateFilterPrice>({
    min: "",
    max: "",
  });

  const debounceMinPrice = useDebounce(value.min);
  const debounceMaxPrice = useDebounce(value.max);
  const { changeMinPrice, changeMaxPrice, resetPrice } = useActions();

  useEffect(() => {
    changeMinPrice(debounceMinPrice);
  }, [debounceMinPrice]);

  useEffect(() => {
    changeMaxPrice(debounceMaxPrice);
  }, [debounceMaxPrice]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onResetHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setValue({ min: "", max: "" });
    resetPrice();
  };

  return (
    <>
      <p className="text-center font-medium text-xl mt-4 mb-2">Price</p>
      <div className="flex flex-wrap">
        <input
          value={value.min}
          onChange={onChangeHandler}
          className="border w-1/2 px-2 py-1"
          name="min"
          placeholder="min"
          type="number"
          min="0"
          max="9999"
        />
        <input
          value={value.max}
          onChange={onChangeHandler}
          className="border w-1/2 px-2 py-1"
          name="max"
          placeholder="max"
          type="number"
          min="0"
          max="9999"
        />
      </div>
      <button
        title="reset the price filter"
        onClick={onResetHandler}
        className="p-1 rounded-es-md rounded-ee-md font-medium bg-slate-200 text-red-400 hover:bg-red-400 hover:text-white w-full border transition-all"
      >
        Reset
      </button>
    </>
  );
};

export default FilterPrice;
