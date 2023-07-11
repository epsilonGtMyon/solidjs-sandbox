import { lazy } from "solid-js";

const routes = [
  {
    path: "/*",
    component: lazy(() => import("../layouts/MainLayout.jsx")),
    children: [
      {
        path: "/",
        component: lazy(() => import("../../pages/home/Home.jsx")),
      },
      // basic1
      {
        path: "/basic/memo1",
        component: lazy(() => import("../../pages/basic/memo1/Memo1.jsx")),
      },
      {
        path: "/basic/signal1",
        component: lazy(() => import("../../pages/basic/signal1/Signal1.jsx")),
      },
      {
        path: "/basic/signal2",
        component: lazy(() => import("../../pages/basic/signal2/Signal2.jsx")),
      }
    ],
  },
];

export { routes };
