import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/actions";
import { loginDetails } from "../store/login/login";

const LoginPage: FC = () => {
  const [value, setValue] = useState({
    login: "",
    password: "",
  });

  const { loginON } = useActions();
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmitHadler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.login !== loginDetails.login) {
      toast.error("Such an account is not registered");
      setValue({ login: "", password: "" });
    } else if (value.password !== loginDetails.password) {
      toast.error("Invalid password, try again");
      setValue((prev) => ({ ...prev, password: "" }));
    } else {
      loginON();
      navigate("/cart");
    }

    // if (loginDetails.login === value.login && loginDetails.password === value.password) {
    //   loginON();
    //   navigate("/cart");
    // } else {
    //   toast.error("Invalid password, try again");
    // }
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="h-screen pt-[60px]"
      >
        <div className="m-auto w-[340px] mt-20">
          <h3 className="text-2xl text-center mb-5  dark:text-[var(--darkTextGray)]">Login page</h3>
          <form onSubmit={onSubmitHadler}>
            <input
              value={value.login}
              onChange={onChangeHandler}
              name="login"
              placeholder="Enter the login (user)"
              type="text"
              className="border-2 w-full mb-2 py-2 px-4 rounded"
              required
            />
            <input
              value={value.password}
              onChange={onChangeHandler}
              name="password"
              placeholder="Enter the password (1234)"
              type="password"
              className="border-2 w-full mb-2 py-2 px-4 rounded"
              required
            />
            <button
              className="bg-green-500 text-white text-xl w-full py-2 px-4 hover:bg-green-700 transition-all rounded"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </motion.section>
    </>
  );
};

export default LoginPage;
