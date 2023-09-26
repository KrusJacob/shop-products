import { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { IProduct } from "../types";

import ProductItem from "./ProductItem";

interface PaginatedItemsPsops {
  products: IProduct[];
  itemsPerPage: number;
}

const PaginatedItems: FC<PaginatedItemsPsops> = ({ products, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState<IProduct[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;

    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-start mb-10 ">
        <TransitionGroup enter={true} component={null}>
          {currentItems.map((product: IProduct) => (
            <CSSTransition timeout={200} unmountOnExit classNames="product__item" key={product.id}>
              <ProductItem product={product} inCart={false} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      <ReactPaginate
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item  hover:bg-blue-100 "
        pageLinkClassName="page-link py-2 block px-4"
        previousClassName="page-item "
        previousLinkClassName="page-link py-2 block px-4 hover:bg-blue-100"
        nextClassName="page-item"
        nextLinkClassName="page-link py-2 block px-4 hover:bg-blue-100  "
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link "
        containerClassName="flex ml-2 items-center border block w-min "
        activeClassName="active bg-blue-200  "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginatedItems;
