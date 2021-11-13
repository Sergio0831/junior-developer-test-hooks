import clsx from "clsx";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

const Button = ({ round, link, children, onClick }) => {
  const buttonClasses = clsx({
    [classes.round]: round
  });

  if (link) {
    return <Link to={link}>{children}</Link>;
  }
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
