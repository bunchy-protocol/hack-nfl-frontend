/* eslint-disable react/jsx-key */
import React, { lazy } from "react";
import { Route } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard"));

const routes = [<Route path="/" exact component={Dashboard} />];

export default routes;
