import classes from "./CategoryTitle.module.scss";

const CategoryTitle = ({ text }) => {
  return <h2 className={classes.title}>{text}</h2>;
};

export default CategoryTitle;
