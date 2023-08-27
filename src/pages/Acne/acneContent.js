// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultInfoCard from "../../examples/Cards/InfoCards/DefaultInfoCard";
import age from "../../assets/images/side-view-man-with-skin-problems.jpg";

function AcneContent() {
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
                  title="L'ACNÉ"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Qu'il s'agisse d'une acné active kystique ou de cicatrices d'acné, l'acné
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        est souvent à l'origine d'une gêne sociale. Elle n'est pas une fatalité. Des
                        solutions à éventuellement combiner existent :
                      </p>
                      <br></br>
                      <p>
                        <b>Soins lavants</b>
                      </p>
                      <br></br>
                      <p>
                        <b>Antibiotiques par voie orale</b>
                      </p>
                      <br></br>
                      <p>
                        <b>Antibiotiques à appliquer sur la peau</b>
                      </p>
                      <br></br>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <b>Radiofréquence pour l'acné active et kystique</b>
                      </p>
                      <br></br>
                      <p>
                        <b>Technologie IPL pour l’acné inflammatoire</b>
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

export default AcneContent;
