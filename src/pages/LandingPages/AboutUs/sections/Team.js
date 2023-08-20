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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import aurelie from "assets/images/identity/IMG-20230816-WA0002.jpg";
import giulia from "assets/images/identity/IMG-20230820-WA0000.jpg";
import team3 from "assets/images/ivana-squares.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="white"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="dark">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              L'équipe
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}></MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* Premier Grid item */}
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team3}
                name="SALAMBERE ASMAO"
                position={{ color: "dark", label: "Docteur en médecine" }}
                description="Médecin généraliste titulaire du diplôme interuniversitaire du Médecine Morphologique et Anti Age de l’Université de Paris Cité. Je vous reçois en consultation pour une écoute et une évaluation de vos besoins et vous proposer un programme de soins sur mesure."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12}>
            {/* Deuxième Grid item */}
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={aurelie}
                name="LABOURDETTE AURÉLIE"
                position={{ color: "info", label: "Infirmière" }}
                description="Infirmière diplômée d’état qui m’assiste pour les soins. Ayant travaillé en dermatologie au CHU de Nice puis en service de chirurgie esthétique en clinique privée dans les Alpes Maritimes elle sait vous accompagner dans votre prise en charge."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12}>
            {/* Troisième Grid item */}
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={giulia}
                name="PIANESE GIULIA"
                position={{ color: "info", label: "Sécrétaire médicale" }}
                description="Secrétaire médicale qui s’occupe entre autres de la planification des rendez-vous et qui répond à vos questions."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
