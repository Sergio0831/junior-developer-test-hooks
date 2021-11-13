import Categories from "../categories/Categories";
import Cart from "../icons/Cart";
import ChevronDown from "../icons/ChevronDown";
import Logo from "../icons/Logo";
import Button from "../ui/Button";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Categories />
      <Logo />
      <div className={classes.actions}>
        <div className={classes.currencies}>
          <span>$</span>
          <ChevronDown />
        </div>
        <div className={classes.cart}>
          <Button link='/cart'>
            <Cart />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
