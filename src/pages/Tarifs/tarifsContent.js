import "./tarifsContent.css";

function TarifsContent() {
  const femaleTreatments = [
    "Aisselles",
    "Maillot intégral + sillon",
    "Demi-jambe",
    "Demi-jambe + maillot",
    "Avant bras",
    "Avant bras + aisselles",
    "Demi-jambe & maillot & aisselles",
    "Avant bras et demi-jambe & maillot & aisselles",
    "Visage & Cou",
    "Torse et ventre",
    "Dos",
  ];

  const femalePrices = [
    [50, 60, 300],
    [100, 120, 600],
    [100, 120, 600],
    [150, 180, 800],
    [100, 120, 600],
    [150, 180, 800],
    [175, 240, 1050],
    [250, 350, 1500],
    [50, 60, 300],
    [100, 120, 600],
    [100, 120, 600],
  ];

  /*const maleTreatments = [
    "Aisselles",
    "Maillot intégral & Fesses",
    "Membres inférieurs",
    "Membres inférieurs & Maillot",
    "Membres supérieurs",
    "Membres supérieurs & Aisselles",
    "Membres inférieurs & Maillot & Aisselles",
    "Membres supérieurs et inférieurs & Maillot & Aisselles",
    "Visage & Cou",
    "Face ventrale tronc",
    "Face dorsale tronc",
    "Epilation pour le corps entier",
  ];*/

  /*const treatments = [
    "VISAGE ENTIER",
    "VISAGE + COU",
    "RELACHEMENT CUTANE PAR ZONE",
    "CICATRICES D'ACNE",
    "AMAS GRAISSEUX/CELLULITE",
  ];

  const treatmentValues = [
    [1000, null],
    [1500, null],
    [1000, null],
    [1000, null],
    [null, 3000],
  ];*/

  /*const malePrices = [
    [500, 50, 60],
    [1250, 125, 150],
    [2500, 250, 300],
    [3750, 375, 450],
    [1500, 150, 180],
    [1900, 190, 230],
    [4500, 450, 540],
    [6000, 600, 720],
    [1500, 150, 180],
    [1500, 150, 180],
    [1500, 150, 180],
    [7000, 700, 1000],
  ];*/

  return (
    <div>
      <div className="app">
        <div className="title-container">
          <h1 className="main-title"></h1>
          <p className="sub-title">Paiement des forfaits en plusieurs fois possible</p>
          <br />
          <p className="sub-title">
            <b>
              <u>
                OFFRE DE LANCEMENT POUR LE MOIS OCTOBRE : FORFAIT EPILATION AISSELLES (6 SEANCES) A
                100 EUROS !
              </u>
            </b>
          </p>
        </div>
        <div className="table-container">
          <h4>TARIFS EPILATION HOMMES ET FEMMES</h4>
          <br />
          <table className="custom-table">
            <thead>
              <tr>
                <th>Traitement</th>
                <th>Prix par séance en forfait</th>
                <th>Prix par séance HORS forfait</th>
                <th>Mon forfait pour 6 séances</th>
              </tr>
            </thead>
            <tbody>
              {femaleTreatments.map((treatment, index) => (
                <tr key={index}>
                  <td>{treatment}</td>
                  <td>{femalePrices[index][0]} €</td>
                  <td>{femalePrices[index][1]} €</td>
                  <td>{femalePrices[index][2]} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="app">
        <div className="table-container">
          <h4>RADIOFREQUENCE POUR RIDES/RIDULES/AMAS GRAISSEUX/EPILATION/RELACHEMENT CUTANE</h4>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h4>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Pour relâchement cutané, cicatrices d'acné, amas graisseux/cellulite : 250 euros la
            séance
          </h4>
          <br />
          <p className="ps-note">
            <b>LESIONS VASCULAIRES(IPL) = 150 euros la séance</b>
          </p>
          <br />
          <p className="ps-note">
            <b>LESIONS PIGMENTAIRES(IPL) = 150 euros la séance</b>
          </p>
          <br />
          <p className="ps-note">
            <b>PEELINGS</b>
          </p>
          <p className="ps-note">
            <b>PEELING SUPERFICIEL = 100 euros la séance</b>
          </p>
          <p className="ps-note">
            <b>PEELING MOYEN = 150 euros la séance</b>
          </p>
          <br />
          <p className="ps-note">
            <b>PRODUITS INJECTABLES SUR DEVIS : À PARTIR DE 300 EUROS, PUIS TARIF DÉGRESSIF</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TarifsContent;
