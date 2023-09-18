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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/beautiful-fresh-girl-with-perfect-skin-natural-makeup-green-leaves-beauty-face-photo-taken-studio.jpg";
import addressIcon from "assets/images/icons/placeholder_738521.png";
import emailIcon from "assets/images/icons/email_482138.png";
import scheduleIcon from "assets/images/icons/schedule_6919424.png";
import phoneIcon from "assets/images/icons/telephone_159844.png";
import LogoDoctolib from "../../../assets/images/icone-doctolib.png";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover", // Adjust the background size
              backgroundPosition: "center", // Adjust the background position
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="success"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contactez nous
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                <p>
                  <b>
                    <img
                      src={addressIcon}
                      alt="Adresse"
                      style={{ width: "20px", height: "20px", marginRight: "5px" }}
                    />{" "}
                    Adresse :{" "}
                  </b>{" "}
                  650 avenue du Général de Gaulle 06700 Saint Laurent du Var
                </p>
                <br />
                <p>
                  <b>
                    <img
                      src={emailIcon}
                      alt="Email"
                      style={{ width: "20px", height: "20px", marginRight: "5px" }}
                    />{" "}
                    Email :{" "}
                  </b>{" "}
                  natureaesthetique@gmail.com
                </p>
                <br />
                <p>
                  <b>
                    <img
                      src={scheduleIcon}
                      alt="Rendez-vous"
                      style={{ width: "20px", height: "20px", marginRight: "5px" }}
                    />{" "}
                    Prendre rendez vous sur Doctolib :{" "}
                  </b>{" "}
                  <a
                    href="https://www.doctolib.fr/medecin-generaliste/vence/asmao-salambere"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={LogoDoctolib}
                      alt="Doctolib Icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </a>
                </p>
                <br />
                <p>
                  <b>
                    <img
                      src={phoneIcon}
                      alt="Téléphone"
                      style={{ width: "20px", height: "20px", marginRight: "5px" }}
                    />{" "}
                    Téléphone :{" "}
                  </b>{" "}
                  06 34 23 52 30
                </p>
              </MKTypography>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
