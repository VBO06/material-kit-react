// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultInfoCard from "../../examples/Cards/InfoCards/DefaultInfoCard";
import woman from "../../assets/images/woman-legs-bathroom-after-hair-removal-laser-epilation-beauty-body-care-concept.jpg";

function EpilationLaserContent() {
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
              Epilation Laser
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}></MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mb: 8 }}>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="EPILATION LASER"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>
                        <b>Pour qui ?</b> : Pour femmes et hommes.
                      </p>
                      <br></br>
                      <p>
                        <b>Pour quelles carnations ?</b> : Toute carnation: clairs, bronzés ou
                        foncés.
                      </p>
                      <br></br>
                      <p>
                        <b>Pour quels types de poils ? </b> : Tous types: fins ou épais, blonds ou
                        foncés (sauf poils blancs).
                      </p>
                      <br></br>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <b>Comment ?</b> Grâce à un appareil laser dédié à l'épilation définitive
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        efficace et fiable et ce sans douleur et toute l'année.
                      </p>
                      <br></br>
                      <p>
                        <b>Les zones du corps pouvant être traitées ?</b> : Tout le corps
                      </p>
                      <br></br>
                      <p>
                        <b>En combien de séances ?</b> : Le nombre exact de séances dépend surtout
                        de la zone traitée, de l’âge, du sexe, et des résultats attendus. Il faut
                        compter en moyenne 8 séances pour une élimination définitive du poil. Le
                        forfait EPILATION comprend 8 séances.
                      </p>
                      <br></br>
                      <p>
                        <b>Et les résultats sont obtenus en moins de 8 séances ? </b> : Vous êtes
                        remboursés de vos séances non réalisées.
                      </p>
                      <br></br>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img src={woman} alt="Descriptive alt text" style={{ width: "100%", height: "auto" }} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default EpilationLaserContent;
