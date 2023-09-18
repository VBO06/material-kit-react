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

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import image from "../../../assets/images/beaute.jpg";
import natural from "../../../assets/images/natural-young-woman-portrait.jpg";
import young from "../../../assets/images/young-beautiful-model-posing.jpg";
import cute from "../../../assets/images/cute-girl-have-rest-summer-park.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mb: 8 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img src={image} alt="Descriptive alt text" style={{ width: "100%", height: "auto" }} />
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="LA MEDECINE ESTHÉTIQUE C'EST QUOI ?"
                  description="Avec l'âge, la qualité et l’aspect de la peau s’altèrent, la silhouette se modifie et l’apparence s’en trouve changée. Il s’agit d’un phénomène naturel que l’on ne peut stopper mais que l’on peut ralentir, retarder et partiellement corriger. La médecine esthétique vise à améliorer l’esthétique du patient sur différentes parties de son corps selon ses besoins sans intervention chirurgicale."
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
                  title="MEDAZUR ESTHÉTIQUE C'EST :"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>
                        <b>UNE PHILOSOPHIE</b> : l’harmonie. Il s’agit de créer une harmonie entre
                        l’image que vous voulez dégager, les spécificités de la physionomie de votre
                        visage et de votre silhouette, les caractéristiques de vos tissus cutanés et
                        adipeux, le respect de la symétrie et des proportions pour un résultat
                        naturel et équilibré.
                      </p>
                      <br></br>
                      <p>
                        <b>UN LEITMOTIV</b> : Le respect de vos traits naturels. Ils vous
                        définissent et doivent toujours être respectés. Il faut donc les sublimer
                        tout en gardant
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        l'unité de votre beauté. La standardisation est proscrite : les visages
                        figés, pommettes massives ainsi que les lèvres disproportionnées sont
                        rejetés.
                      </p>
                      <br></br>
                      <p>
                        <b>UN OBJECTIF</b> : une amélioration de votre esthétique par stimulation de
                        vos propres cellules pour une meilleure qualité de votre tissu cutané de
                        façon efficace et durable.
                      </p>
                      <br></br>
                      <p>
                        <b>UNE PRISE EN CHARGE GLOBALE</b> du patient à visée anti-âge qui prend en
                        compte la santé globale psychologique et physiologique, ses aspects
                        nutritionnels et hormonaux afin de prévenir, cibler et traiter de
                        l’intérieur et de l’extérieur les signes de vieillissement cutané pour bien
                        vieillir (rides, ridules, relâchement cutané, acné, dilatation des pores,
                        tâches pigmentaires, tâches vasculaires, cellulite etc.)
                      </p>
                      <br></br>
                      <p>
                        <b>UNE PRISE EN CHARGE SUR MESURE</b> : un programme de soins personnalisé
                        sera proposé.
                      </p>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img
              src={natural}
              alt="Descriptive alt text"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto", mb: 8 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img src={young} alt="Descriptive alt text" style={{ width: "100%", height: "auto" }} />
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="DES MÉTHODES DE SOIN MÉTICULEUSEMENT CHOISIES"
                  description="Les méthodes sélectionnées sont les moins invasives possibles avec un temps d'éviction sociale minime et un risque d'effets indésirables limité. Pour ce faire, les dispositifs médicaux utilisés sont récents, marqués &quot;CE&quot; et garantissent efficacité et sécurité. Le recours aux produits injectables se voudra mesuré et réduit au nécessaire pour un résultat naturel."
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
                  title="DES FACILITES DE PAIEMENT"
                  description={
                    <div style={{ textAlign: "left" }}>
                      <p>* Soins à la carte</p>
                      <p>
                        * Pour un forfait plusieurs soins de médecine esthétique peuvent être
                        associés pour un résultat optimal
                      </p>
                      <p>* Paiement au forfait possible d’où un coût par séance réduit</p>
                      <p>* Paiement en plusieurs fois possible pour les forfaits</p>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <p>* Possibilité de basculer sur un forfait même après 3 séances d'un soin</p>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <img src={cute} alt="Descriptive alt text" style={{ width: "100%", height: "auto" }} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
