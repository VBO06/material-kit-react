// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultInfoCard from "../../examples/Cards/InfoCards/DefaultInfoCard";
import youngcaucasian from "../../assets/images/young-caucasian-lady-is-seen-closeup-pointing-towards-her-rosy-red-cheeks-common-symptom-rosacea-young-adults-copy-space-right.jpg";

function LesionsVasculairesContent() {
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
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mb: 8 }}>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="LESIONS VASCULAIRES"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Il s'agit de malformations des vaisseaux du visage et du corps. Des rougeurs
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        souvent sur les joues sont d'abord diffusent (érythrose faciale) puis
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        s'accentuent et deviennent permanentes avec l'âge (couperose) avec des
                        vaisseaux dilatés (télangiectasies) voire des pustules (rosacée).
                      </p>
                      <br></br>
                      <p>
                        <b>La rosacée</b>
                      </p>
                      <br></br>
                      <p>
                        <b>Les télangiectasies</b>
                      </p>
                      <br></br>
                      <p>
                        <b>L’érythrose faciale</b>
                      </p>
                      <br></br>
                      <p>
                        <b>Les tâches rubis</b>
                      </p>
                      <br></br>
                      <p>
                        <b>Les angiomes stellaire</b>
                      </p>
                      <br></br>
                      <p>
                        Les résultats sont obtenus en <b>1 à 4</b> séances
                      </p>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img
              src={youngcaucasian}
              alt="Descriptive alt text"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LesionsVasculairesContent;
