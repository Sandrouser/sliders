import Navbar from "./components/Navbar.jsx";
import Slider from "./page/Slider.jsx";

const datarouter = [
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <h1>ERROR 404</h1>,
    children: [
      {
        path: "/",
        element: <h1>HOME</h1>,
        title: "home",
      },
      {
        path: "/slider",
        element: <Slider></Slider>,
        title: "slider",
      },
      {
        path: "/style",
        element: <h1>Style</h1>,
        title: "style",
      },
    ],
  },
];

export default datarouter;
