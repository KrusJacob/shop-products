export interface ProductState {
  products: IProduct[];
  loading: boolean;
  error: null | string;
}

export interface FilterState {
  category: string[];
  minPrice: number | null;
  maxPrice: number | null;
  popularSwitch: boolean;
  ratingSwitch: boolean;
}

export interface CartState {
  products: IProduct[];
  // quantity: () => number;
}

export interface ModalState {
  modalActive: boolean;
  productImg: IProduct["image"] | undefined;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
