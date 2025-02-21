import { createBrowserRouter, Navigate } from "react-router-dom";
import RootWrapper from "../layouts/RootWrapper";
import DefaultWrapper from "../layouts/DefaultWrapper";
import lazyLoad from "../layouts/lazyLoader";
import { baseroutes } from "./baseroutes";

// Dynamic Modules for efficient package loading
const AllGames = lazyLoad(() => import("../pages/games"));
const GamePlay = lazyLoad(() => import("../pages/games/gamePlay"));

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />,
    children: [
      {
        path: "/",
        element: <DefaultWrapper />,
        children: [
          {
            index: true,
            element: <Navigate to="/home" replace />
          },
          ...baseroutes
        ],
      },
      {
        path: "games",
        children: [
          { index: true, element: <AllGames /> },
          { path: ":game", element: <GamePlay /> },
        ],
      },
    ],
  },
]);

export default RootRoutes;
