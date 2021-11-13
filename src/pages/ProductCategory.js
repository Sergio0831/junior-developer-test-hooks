import { useLocation, useRouteMatch } from "react-router";
import CategoryTitle from "../components/ui/CategoryTitle";
import ProductList from "../components/product/ProductList";

const ProductCategory = () => {
  const match = useRouteMatch();
  const { categoryName } = match.params;

  return (
    <section>
      <CategoryTitle text={categoryName} />
      <ProductList></ProductList>
    </section>
  );
};

export default ProductCategory;
