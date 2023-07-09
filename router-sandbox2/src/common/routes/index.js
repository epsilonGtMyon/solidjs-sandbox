import { lazy } from "solid-js";

// import()をするならexport defaultとじゃないといけない
// 何か解決方法はありそうだが

// 通常のルート
// const routes = [
//   // home
//   {
//     path: "/",
//     component: lazy(() => import("../../pages/home/Home.jsx")),
//   },

//   // sandbox01
//   {
//     path: "/sandbox01",
//     component: lazy(() => import("../../pages/sandbox01/Sandbox01.jsx")),
//   },
// ];


// 階層ありのルート
const routes = [
  {
    path: "/*",
    component: lazy(() => import("../layouts/MainLayout.jsx")),
    children: [
        // home
        {
          path: ["/", "/home"],
          component: lazy(() => import("../../pages/home/Home.jsx")),
        },
      
        // sandbox01
        {
          path: "/sandbox01",
          component: lazy(() => import("../../pages/sandbox01/Sandbox01.jsx")),
        },
    ]
  },
];


export { routes };
