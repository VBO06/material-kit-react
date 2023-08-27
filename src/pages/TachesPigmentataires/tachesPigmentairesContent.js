// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultInfoCard from "../../examples/Cards/InfoCards/DefaultInfoCard";
import age from "../../assets/images/menopausal-women-worry-about-melasma-face.jpg";

function TachesPigmentairesContent() {
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
                  title="TACHES PIGMENTAIRES"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>
                        Les lésions pigmentaires sont souvent bénignes mais inesthétiques.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        L'exposition solaire en est souvent à l'origine comme les lentigos
                        présents&nbsp;
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        sur le visage et les mains appelées plus simplement "tâches de vieillesse".
                        Les tâches pigmentaires sont une accumulation de mélanine, pigment naturel
                        de la peau. Les soins choisis dépendent de la cause de la tâche, sa
                        profondeur, sa superficie, son intensité, de la carnation à traiter, des
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        autres lésions associées etc. Il pourra s'agir de peeling plus ou moins
                        profond et/ou de la technologie IPL.
                      </p>
                      <br></br>
                      <p>
                        Le peeling entraîne une desquamation douce de la ou les couche(s) la ou les
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        plus superficielle(s) de la peau afin d'obtenir une peau plus uniforme avec
                        un grain de peau affiné. La technologie IPL elle envoie une onde qui cible
                        la mélanine accumulée des tâches et la détruit sans douleur ni dommage pour
                        la peau.
                      </p>
                      <br></br>
                      <p>
                        Le choix de la technique se fera avec le patient et le résultat escompté
                        sera discuté en amont après une analyse minutieuse de ces lésions
                        pigmentaires.
                      </p>
                      <br></br>
                      <p>
                        Hors mélasma il faudra compter 2 séances. En cas de mélasma il faudra
                        compter 4 séances.
                      </p>
                      <br></br>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img src={age} alt="Descriptive alt text" style={{ width: "100%", height: "auto" }} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TachesPigmentairesContent;
