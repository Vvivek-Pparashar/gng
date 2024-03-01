import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Errorfile from "./components/ErrorFile/Errorfile";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurProjects from "./components/OurProjects/OurProjects";
import Alenza from "./components/Alenza/Alenza";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorfile />,
  },

  // {
  //   path: "/AboutUs",
  //   element: <AboutUs />
  // },

  // {
  //   path: "/contactUs",
  //   element: <ContactUs />
  // }, 

  // {
  //   path: "/OurProjects",
  //   element: <OurProjects />
  // }, 

  // {
  //   path : "/GnG-Commercial-Alenza",
  //   element:<Alenza/>
  // }

]);

export default router;