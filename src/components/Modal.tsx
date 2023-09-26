import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/actions";
import { getModal } from "../store/selector";

const Modal = () => {
  const { modalActive, productImg } = useSelector(getModal);
  const { hideModal } = useActions();

  const onHideModal = () => {
    hideModal();
  };

  return (
    <div
      onClick={onHideModal}
      className={
        (modalActive ? "opacity-100" : "opacity-0 pointer-events-none") +
        " bg-opacity-70 bg-black fixed z-50 inset-0 flex justify-center items-center transition-all duration-300"
      }
    >
      <div onClick={(e) => e.stopPropagation()} className="p-6 bg-white">
        <img className="w-full max-h-[650px]" src={productImg} />
      </div>
    </div>
  );
};

export default Modal;
