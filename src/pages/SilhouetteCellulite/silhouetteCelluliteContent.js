// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultInfoCard from "../../examples/Cards/InfoCards/DefaultInfoCard";
import stretch from "../../assets/images/close-up-woman-body-with-stretch-marks.jpg";
import closeup from "../../assets/images/closeup-beautiful-slim-woman-body-with-sexy-buttocks-big-ass.jpg";
import squeeze from "../../assets/images/female-squeezes-cellulite-skin-her-legs.jpg";

function SilhouetteCelluliteContent() {
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
                  title="SILHOUETTE ET CELLULITE"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>Pour affiner la silhouette les objectifs sont :</p>
                      <br />
                      <p> - Baisser le taux de masse -</p>
                      <br />
                      <p>- Augmenter la masse musculaire</p>
                      <br />
                      <p> - Eliminer les amas graisseux</p>
                      <br />
                      <br></br>
                      <p>
                        Il s’agit également de lutter contre la cellulite. Elle est présente chez
                        90% des femmes, qu’elles soient corpulentes ou minces. Il ne s’agit pas
                        d’une maladie mais d’une anomalie de l’architecture des tissus graisseux.
                        Elle se localise préférentiellement au niveau des fesses, cuisses et genoux.
                        Il faut donc mobiliser plusieurs leviers pour un résultat optimal et pérenne
                        : la technologie de la radiofréquence non-invasive ou micro-invasive,
                        l’alimentation, l’activité physique, une action mécanique sur les amas
                        graisseux, un complément alimentaire et un probiotiques qui favorisent
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        l'élimination des graisses et la perte de poids.
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
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mb: 8 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img
              src={squeeze}
              alt="Descriptive alt text"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="SILHOUETTE ET CELLULITE"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        La radiofréquence non invasive : de l'énergie est transmise à travers la
                        peau et chauffe les tissus graisseux sous cutanés réduisant ainsi les amas
                        graisseux, améliorant la texture de la peau, luttant contre le relâchement
                        cutané, les vergetures et cicatrice. (8 séances sont d’emblée incluses dans
                        le forfait).
                      </p>
                      <br></br>
                      <p>
                        La radiofréquence micro-invasive : il s’agit de la même technique couplée à
                        l’usage de micro-aiguilles qui permettent une délivrance d’énergie plus en
                        profondeur pour plus d’efficacité.
                      </p>
                      <br></br>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mb: 8 }}>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="SILHOUETTE ET CELLULITE"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        L'alimentation : il s’agit de déterminer vos besoins énergétiques et en
                        fonction vos apports énergétiques (kilocalories), en macronutriments
                        (protéines, glucides, lipides) et micronutriments (vitamines, minéraux,
                        oligoéléments etc.)
                      </p>
                      <br></br>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        L'activité physique : en fonction de vos capacités physiques et préférences
                        un programme sportif est établi. L’activité sportive est indispensable à la
                        réduction de masse grasse en parallèle de l’accroissement de la masse
                        musculaire.
                      </p>
                      <br></br>
                      <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Action mécanique sur les amas graisseux : A effectuer plusieurs fois par
                        semaine soi-même soit manuellement soit à l’aide d’un appareil électrique,
                        elle permet d’agir sur la cellulite, les amas graisseux et la texture de la
                        peau.
                      </p>
                      <br></br>
                      <p>
                        Complément alimentaire : des actifs végétaux permettent de favoriser la
                        dégradation des graisses, la perte de poids, le contrôle de la glycémie et
                        le taux de cholestérol.
                      </p>
                      <br></br>
                      <p>
                        Probiotique : une synergie de bonnes bactéries apporte un soutien
                        nutritionnel dans le cadre d’un régime minceur
                      </p>
                      <br></br>
                      <p>
                        Un programme personnalisé et précis pour chaque levier est établi et
                        comprendra 8 séances de radiofréquence. Le relâchement cutané éventuel et
                        les vergetures seront traités dans le même temps.
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
              src={closeup}
              alt="Descriptive alt text"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SilhouetteCelluliteContent;
