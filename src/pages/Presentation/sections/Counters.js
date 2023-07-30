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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "../../../examples/Cards/InfoCards/DefaultInfoCard";
import Philosophie from "../../../assets/images/icons/philosophie.png";
import AntiAge from "../../../assets/images/icons/anti-age.png";
import Paiement from "../../../assets/images/icons/paiement.png";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }} spacing={2}>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              icon={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={Philosophie} alt="Philosophie" style={{ width: 50, height: 50 }} />
                </div>
              }
              title="Une philosophie : L'harmonie"
              description="Il s’agit de créer une harmonie entre l’image que vous voulez dégager, les spécificités de la physionomie de votre visage et de votre silhouette, les caractéristiques de vos tissus cutanés et adipeux, le respect de la symétrie et des proportions pour un résultat naturel et équilibré"
            />
          </Grid>
          <Grid item md={4} display={{ md: "none" }}>
            <Divider orientation="horizontal" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              icon={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={AntiAge} alt="Philosophie" style={{ width: 50, height: 50 }} />
                </div>
              }
              title="Une prise en charge globale anti-âge sur mesure"
              description="Elle prend en compte la santé globale psychologique et physiologique afin de prévenir, cibler et traiter de l’intérieur et de l’extérieur les signes de vieillissement cutané pour bien vieillir"
            />
          </Grid>
          <Grid item md={4} display={{ md: "none" }}>
            <Divider orientation="horizontal" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              icon={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={Paiement} alt="Philosophie" style={{ width: 50, height: 50 }} />
                </div>
              }
              title="Des forfaits et facilités de paiement"
              description="Paiement par séance ou au forfait et possibilité de paiement en plusieurs fois"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
