import classes from "./ProductList.module.scss";

const ProductList = ({ children }) => {
  return <div className={classes.list}>{children}</div>;
};

export default ProductList;
