import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "styles/constants.css";
import "styles/responsive.css";
import "styles/variables.css";
import { PrivateRoutes, PublicRoutes } from "models/routes";
import { AuthGuard } from "guards";
import { CompleteLoader } from "components";
import Logout from "components/atoms/Logout/Logout";

//? Lazy loading
const Login = lazy(() => import("./pages/login/Login"));
const Home = lazy(() => import("./pages/home/Home.page"));
const MainComponent = lazy(() => import("./pages/items/MainComponent"));

export default function Navigation() {
  return (
    <Suspense fallback={<CompleteLoader show />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
          <Route path="*" element={<>Not Found</>} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route path={PrivateRoutes.HOME_ID} element={<Home />} />
            <Route path={PrivateRoutes.ITEMS} element={<MainComponent />} />
          </Route>
        </Routes>
        <Logout />
      </BrowserRouter>
    </Suspense>
  );
}
