import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layuot/Layout";
import { Counter } from "./features/counter/Counter";
import Cart from "./pages/Cart";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/category/clothes' />
        </Route>
        <Route
          exact
          path='/category/:categoryName'
          component={ProductCategory}
        />
        <Route
          exact
          path='/category/:categoryName/:productId'
          component={ProductDetails}
        />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </Layout>
  );
}

export default App;
