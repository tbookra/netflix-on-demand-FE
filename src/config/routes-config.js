import {
  Login,
  Registration,
  ChangePasswordPage,
  ConfirmPleasePage,
  SignoutPage,
  ConfirmationAccepted,
} from "../screens/auth";
import {
  Home,
  MovieItem,
  PurchasePage,
  SearchPage,
  NotFoundPage,
  MovieSections,
  accessibleMovies,
} from "../screens/app";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/SearchPage",
    component: SearchPage,
    exact: true,
  },
  {
    path: "/SignoutPage",
    component: SignoutPage,
    exact: true,
  },
  {
    path: "/ConfirmPleasePage",
    component: ConfirmPleasePage,
    exact: true,
  },
  {
    path: "/auth/ConfirmationAccepted/:userEmail/:rememberMe",
    component: ConfirmationAccepted,
    exact: true,
  },
  {
    path: "/ChangePasswordPage",
    component: ChangePasswordPage,
    exact: true,
  },
  {
    path: "/movieItem/:movieId",
    component: MovieItem,
    privateRoute: true,
  },
  {
    path: "/purchasePage/:movieId",
    component: PurchasePage,
    privateRoute: true,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/registration",
    component: Registration,
  },
  {
    path: "/MovieSection/:section",
    component: MovieSections,
  },
  {
    path: "/accessibleMovies",
    component: accessibleMovies,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];
