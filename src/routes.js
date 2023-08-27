/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
//import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import ContactUs from "layouts/pages/landing-pages/contact-us";

// Sections
import Presentation from "layouts/pages/presentation";
import Team from "pages/Team";
import EpilationLaser from "./pages/EpilationLaser/epilationlaser";
import LesionsVasculairesPage from "./pages/LesionsVasculaires";
import TachesPigmentairesPage from "./pages/TachesPigmentataires";
import AcnePage from "./pages/Acne";
import SilhouetteCellulitePage from "./pages/SilhouetteCellulite";
import RidesRelachementCutanePage from "./pages/RidesRelachementCutane";
import TarifsPage from "./pages/Tarifs";

const routes = [
  {
    name: "accueil",
    icon: <Icon>dashboard</Icon>,
    route: "/accueil",
    component: <Presentation />,
  },
  {
    name: "L'équipe",
    icon: <Icon>view_day</Icon>,
    route: "/team",
    component: <Team />,
  },
  {
    name: "Traitements",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Epilation laser",
        description: " ",
        route: "/epilationlaser",
        component: <EpilationLaser />,
      },
      {
        name: "Rides / Relâchement cutané",
        description: " ",
        route: "/ridesRelachementCutane",
        component: <RidesRelachementCutanePage />,
      },
      {
        name: "Silhouette / Cellulite",
        description: " ",
        route: "/silhouetteCellulite",
        component: <SilhouetteCellulitePage />,
      },
      {
        name: "Tâches pigmentaires",
        description: " ",
        route: "/tachespigmentaires",
        component: <TachesPigmentairesPage />,
      },
      {
        name: "Lésions vasculaires",
        description: " ",
        route: "/lesionsvasculaires",
        component: <LesionsVasculairesPage />,
      },
      {
        name: "Acné",
        description: " ",
        route: "/acne",
        component: <AcnePage />,
      },
    ],
  },
  {
    name: "Tarifs",
    icon: <Icon>view_day</Icon>,
    route: "/tarifs",
    component: <TarifsPage />,
  },
  {
    name: "Contacts",
    route: "/sections/navigation/contactus",
    component: <ContactUs />,
  },
];

export default routes;
