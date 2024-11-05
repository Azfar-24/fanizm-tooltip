import React, { lazy, Suspense } from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import LiveQuiz from "../components/livequiz";
import AppLayout from "../components/applayout";
import Home from "../pages/home";
import PaymentMethod from "../pages/paymentMethod";
import ViewContest from "../pages/viewContest";
import AddFund from "../pages/addFund";

const childRoutes = [
  {
    index: true,
    element: (
      <Suspense fallback={"loading..."}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/:id",
    element: (
      <Suspense fallback={"loading..."}>
        <LiveQuiz />
      </Suspense>
    ),
  },
  {
    path: "/add-fund",
    element: (
      <Suspense fallback={"loading..."}>
        <AddFund />
      </Suspense>
    ),
  },
  {
    path: "/payment-method",
    element: (
      <Suspense fallback={"loading..."}>
        <PaymentMethod />
      </Suspense>
    ),
  },
  {
    path: "/view-contest",
    element: (
      <Suspense fallback={"loading..."}>
        <ViewContest />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <h1>No Such Route</h1>,
  },
];

const route = [
  {
    path: "/",
    element: (
      <Suspense fallback={"loading..."}>
        <AppLayout />
      </Suspense>
    ),
    children: childRoutes,
    errorElement: <h1>Something went wrong; please refresh the page.</h1>,
  },
];

export const router = createMemoryRouter(route);

const Routes = () => (
  <Suspense fallback={"loading...."}>
    <RouterProvider router={router} />
  </Suspense>
);

export default Routes;
