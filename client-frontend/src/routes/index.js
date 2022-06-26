import ProductFavorite from "../components/FavoriteProduct";
import TrackingOrder from "../components/TrackingOrder";
import CartPage from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";
import DetailProductPage from "../pages/Detail";
import HomePage from "../pages/Home";
import ProductsPage from "../pages/Products";
import ProfilePage from "../pages/Profile";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    name: "Product detail",
    path: "/products/:slug",
    component: DetailProductPage,
  },
  {
    name: "CartPage",
    path: "/cart",
    component: CartPage,
    private: true,
    exact: false,
  },
  {
    name: "Profile",
    path: "/profile",
    component: ProfilePage,
    private: true,
    exact: false,
  },
  {
    name: "Checkout",
    path: "/checkout",
    component: CheckoutPage,
    private: true,
    exact: true,
  },
  {
    name: "Product page",
    path: "/products",
    component: ProductsPage,
  },
  {
    name: "Favorite List",
    path: "/favorite-list/:id",
    component: ProductFavorite,
    private: true,
    exact: true,
  },
  {
    name: "Tracking Order",
    path: "/tracking-order/:id",
    component: TrackingOrder,
    private: true,
    exact: true,
  },
];

export default routes;
