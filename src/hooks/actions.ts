import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { productActions } from "../store/cart/cart";
import { filterActions } from "../store/filter/filter";
import { loginActions } from "../store/login/login";
import { modalActions } from "../store/modal/modal";

const actions = {
  ...filterActions,
  ...productActions,
  ...loginActions,
  ...modalActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
