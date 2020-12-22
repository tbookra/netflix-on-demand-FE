import React from "react";
import { AccessibleMovies, MovieItem, PurchasePage } from "../screens/app";

export const routes = [
  {
    path: "/",
    component: React.lazy(() => import("../screens/app/Home")),
    exact: true,
  },
  {
    path: "/SearchPage",
    component: React.lazy(() => import("../screens/app/SearchPage")),
    exact: true,
  },
  {
    path: "/SignoutPage",
    component: React.lazy(() => import("../screens/auth/SignoutPage")),
    exact: true,
  },
  {
    path: "/ConfirmPleasePage",
    component: React.lazy(() => import("../screens/auth/ConfirmPleasePage")),
    exact: true,
  },
  {
    path: "/auth/ConfirmationAccepted/:userEmail/:rememberMe",
    component: React.lazy(() => import("../screens/auth/ConfirmationAccepted")),
    exact: true,
  },
  {
    path: "/ChangePasswordPage",
    component: React.lazy(() => import("../screens/auth/ChangePasswordPage")),
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
    component: React.lazy(() => import("../screens/auth/Login")),
  },
  {
    path: "/registration",
    component: React.lazy(() => import("../screens/auth/Registration")),
  },
  {
    path: "/MovieSection/:section",
    component: React.lazy(() => import("../screens/app/MovieSections")),
  },
  {
    path: "/accessibleMovies",
    component: AccessibleMovies,
    privateRoute: true,
  },
  {
    path: "*",
    component: React.lazy(() => import("../screens/app/NotFoundPage")),
  },
];
