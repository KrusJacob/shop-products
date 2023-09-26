import React from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center flex-col h-screen">
      <h3 className="text-center  text-6xl">404 Page not found</h3>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 mt-12 bg-yellow-300 text-xl hover:bg-yellow-400 transition-all  border rounded"
      >
        go to the Home Page
      </button>
    </section>
  );
};

export default Page404;
