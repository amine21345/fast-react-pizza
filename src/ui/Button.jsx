import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, disabled, to, onClick }) => {
  const base =
    "inline-block text-sm rounded-full bg-yellow-500 font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200";
  const styles = {
    primary: base + " px-4 py-3",
    small: base + " py-2 px-4 text-xs",
    round: base + " px-3 py-2 rounded-full font-bold text-xs",
    secondary:
      "inline-block text-sm rounded-full px-4 py-3 border-2 font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
