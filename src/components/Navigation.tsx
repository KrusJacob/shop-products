import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useActions } from "../hooks/actions";
import { getLogin } from "../store/selector";

const Navigation: FC = () => {
  const navigate = useNavigate();

  const login = useSelector(getLogin);
  const { loginOFF } = useActions();

  return (
    <header className="w-full flex h-[70px] items-center justify-between px-10 bg-[var(--mainColor)] z-20">
      <span onClick={() => navigate("/")} className="text-4xl font-medium cursor-pointer">
        Logo
      </span>
      <nav>
        <NavLink
          className={({ isActive }) =>
            (isActive ? "opacity-100 border-b-2 border-black" : "opacity-75") +
            " mr-6 text-2xl font-medium hover:opacity-100"
          }
          to="/"
        >
          Main
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            (isActive ? "opacity-100  border-b-2 border-black" : "opacity-75") +
            " text-2xl mr-12  font-medium hover:opacity-100"
          }
          to="/products"
        >
          Products
        </NavLink>
        {login ? (
          <button onClick={() => loginOFF()} className="text-2xl font-medium opacity-75 hover:opacity-100">
            Logout
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              (isActive ? "opacity-100 border-b-2 border-black" : "opacity-75") +
              " text-2xl font-medium hover:opacity-100"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
