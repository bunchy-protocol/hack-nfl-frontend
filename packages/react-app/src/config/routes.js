/* eslint-disable react/jsx-key */
import AuthorizedRoute from "base-shell/lib/components/AuthorizedRoute/AuthorizedRoute";
import React, { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));

const routes = [
  <AuthorizedRoute path="/dashboard" exact component={Dashboard} />,
];

export default routes;
