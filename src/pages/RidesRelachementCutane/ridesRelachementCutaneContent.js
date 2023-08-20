// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultInfoCard from "../../examples/Cards/InfoCards/DefaultInfoCard";
import stretch from "../../assets/images/elder-woman-using-injection-her-eye-wrinkles.jpg";

function RidesRelachementCutaneContent() {
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
                  title="RIDES/RELACHEMENT CUTANE"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>
                        Le vieillissement, les rides et ridules sont la résultante de plusieurs
                        phénomènes :{" "}
                      </p>
                      <br />
                      <p>
                        Diminution de la quantité et de la qualité des fibres de collagène et des
                        fibres élastiques constituants essentiels de la peau
                      </p>
                      <br />
                      <p>
                        Diminution de la quantité d’acide hyaluronique produites par les cellules de
                        la peau{" "}
                      </p>
                      <br />
                      <p>Affaissement des amas graisseux du visage </p>
                      <br />
                      <br></br>
                      <p>Modification de la structure osseuse du visage</p>
                      <br></br>
                      <p>
                        Pour traiter ces rides et ridules et relâchement cutané plusieurs techniques
                        sont possibles et peuvent être combinées :{" "}
                      </p>
                      <br></br>
                      <p>
                        La radiofréquence non-invasive ou micro-invasive pour stimuler la production
                        de collagène et fibres élastiques en quantité et en qualité ainsi que celle
                        d’acide hyaluronique par la peau
                      </p>
                      <br></br>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        L'acide hyaluronique : qui restaure immédiatement les volumes et comble les
                        rides, ridules et atténue le relâchement cutané
                      </p>
                      <br></br>
                      <p>
                        Les simulateurs cutanés injectables pour stimuler pendant plusieurs mois la
                        production de collagène et fibres élastiques en quantité et en qualité ainsi
                        que celle d’acide hyaluronique par la peau
                      </p>
                      <br></br>
                      <p>
                        Le peeling : en plus de jouer un rôle stimulant pour la production des
                        constituants de la peau il redonne de l’éclat à la peau pour un teint
                        uniforme et un grain de peau affiné
                      </p>
                      <br></br>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img
              src={stretch}
              alt="Descriptive alt text"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default RidesRelachementCutaneContent;
