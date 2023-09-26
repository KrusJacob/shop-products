import { FilterState, IProduct } from "../types";

type IfilterProduct = {
  products: IProduct[];
  category: FilterState["category"];
  minPrice: FilterState["minPrice"];
  maxPrice: FilterState["maxPrice"];
  popularSwitch: FilterState["popularSwitch"];
  ratingSwitch: FilterState["ratingSwitch"];
};

export const filterProduct = (fn: IfilterProduct) => {
  let sortItems = filteredByCategory(fn.products, fn.category);
  sortItems = filteredByPrice(sortItems, fn.minPrice, fn.maxPrice);
  sortItems = sortedByPopular(sortItems, fn.popularSwitch);
  sortItems = sortedByRaitng(sortItems, fn.ratingSwitch);

  return sortItems;
};

const filteredByCategory = (items: IProduct[], category: FilterState["category"]) =>
  items.filter((item: IProduct) => {
    if (category.length === 0) {
      return item;
    }
    return category.includes(item.category);
  });

const filteredByPrice = (
  items: IProduct[],
  minPrice: FilterState["minPrice"],
  maxPrice: FilterState["maxPrice"]
) =>
  items.filter((item: IProduct) => {
    if (minPrice && maxPrice) {
      return item.price > minPrice && item.price < maxPrice;
    }
    if (minPrice) {
      return item.price > minPrice;
    }
    if (maxPrice) {
      return item.price < maxPrice;
    }
    return item;
  });

const sortedByPopular = (items: IProduct[], popularSwitch: FilterState["popularSwitch"]) =>
  popularSwitch ? items.sort((x: IProduct, y: IProduct) => x.rating.count - y.rating.count).reverse() : items;

const sortedByRaitng = (items: IProduct[], ratingSwitch: FilterState["ratingSwitch"]) =>
  ratingSwitch ? items.sort((x: IProduct, y: IProduct) => x.rating.rate - y.rating.rate).reverse() : items;
