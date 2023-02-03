import { useEffect } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ]
    },
  ];

  const renderedRoutes = useRoutes(routes);

  return renderedRoutes;
}
