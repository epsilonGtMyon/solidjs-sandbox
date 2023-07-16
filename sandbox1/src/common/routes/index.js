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
        path: "/basic/effect1",
        component: lazy(() => import("../../pages/basic/effect1/Effect1.jsx")),
      },
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
      },
      // control-flow
      {
        path: "/control-flow/for1",
        component: lazy(() => import("../../pages/controlflow/for1/FlowFor1.jsx")),
      },
      {
        path: "/control-flow/show1",
        component: lazy(() => import("../../pages/controlflow/show1/FlowShow1.jsx")),
      },
      {
        path: "/control-flow/switch1",
        component: lazy(() => import("../../pages/controlflow/switch1/FlowSwitch1.jsx")),
      },
      {
        path: "/control-flow/portal1",
        component: lazy(() => import("../../pages/controlflow/portal1/FlowPortal1.jsx")),
      }
    ],
  },
];

export { routes };
