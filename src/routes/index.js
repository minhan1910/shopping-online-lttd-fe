import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFoundPage/NotFound";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import SigninPage from "../pages/SiginPage/SigninPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SigninPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignupPage,
    isShowHeader: false,
  },
  {
    path: "/product-details",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFound,
    isShowHeader: false,
  },
];

export { routes };
