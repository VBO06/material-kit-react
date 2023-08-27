/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import TarifsContent from "./tarifsContent";

function Tarifs() {
  // eslint-disable-next-line react/prop-types
  const LogoText = ({ text, colorStart, colorEnd }) => {
    const style = {
      background: `linear-gradient(to bottom right, ${colorStart}, ${colorEnd})`,
      padding: "1rem",
      display: "inline-block",
      backgroundImage: `-webkit-linear-gradient(top, ${colorStart} 50%, ${colorEnd} 50%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "2.5rem",
      fontWeight: "bold",
      letterSpacing: "0.1rem",
    };

    return <div style={style}>{text}</div>;
  };

  return (
    <>
      <DefaultNavbar routes={routes} />
      <Container>
        <Grid container item xs={12} lg={12} justifyContent="center" mx="auto">
          <MKTypography
            variant="h1"
            color="dark"
            mt={-6}
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            <LogoText text="MEDAZUR ESTHETIQUE" colorStart="#ffffff" colorEnd="#ffffff" />
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            textAlign="center"
            px={{ xs: 6, lg: 12 }}
            mt={1}
          >
            L&apos;esthètique médicale sur la côté d&apos;Azur
          </MKTypography>
        </Grid>
      </Container>
      <TarifsContent />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Tarifs;
