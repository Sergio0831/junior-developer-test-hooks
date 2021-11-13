import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import { CATEGORIES_QUERY } from "../../graphql/query";
import classes from "./Categories.module.scss";

const Categories = () => {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);

  if (loading) return <p>...Loading</p>;
  if (error) return <p>Error: error.message</p>;
  const { categories } = data;

  return (
    <ul className={classes.categories}>
      {categories.map((category) => (
        <li key={category.name}>
          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            to={`/category/${category.name}`}
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
