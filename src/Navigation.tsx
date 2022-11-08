import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "styles/constants.css";
import "styles/variables.css";
import { CompleteLoader } from "components";

//? Lazy loading
const Home = lazy(() => import("./pages/home/Home.page"));
const NotFound = lazy(() => import("./pages/notFound/NotFound.page"));
const TermsAndConditions = lazy(
  () => import("./pages/termsAndConditions/TermsAndConditions")
);

export default function Navigation() {
  return (
    <Suspense fallback={<CompleteLoader show />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
