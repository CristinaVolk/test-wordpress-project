import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main-page/index";

const CoursesPage = React.lazy(() => import("./pages/courses-page/"));
const CoursePage = React.lazy(() => import("./pages/course-page/"));
const BrandsPage = React.lazy(() => import("./pages/BrandsPage"));
const AboutPage = React.lazy(() => import("./pages/about-page/"));

export const useRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path='/' exact>
          <MainPage id='page-wrap' />
        </Route>
        <Route path='/about' exact component={AboutPage} />
        <Route path='/brands' exact component={BrandsPage} />
        <Route path='/courses' exact component={CoursesPage} />
        <Route path='/courses/course/:id' exact component={CoursePage} />
      </Switch>
    </Suspense>
  );
};
