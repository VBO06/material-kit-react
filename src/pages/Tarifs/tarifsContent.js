import "./tarifsContent.css";

function TarifsContent() {
  const femaleTreatments = [
    "Aisselles",
    "Maillot intégral",
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
  ];

  const femalePrices = [
    [400, 50, 60],
    [800, 100, 120],
    [1600, 200, 240],
    [2400, 300, 360],
    [800, 100, 120],
    [1200, 150, 180],
    [2800, 350, 420],
    [3600, 450, 540],
    [800, 100, 120],
    [800, 100, 120],
    [800, 100, 120],
    [5000, 625, 750],
  ];

  const maleTreatments = [
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
  ];

  const treatments = [
    "VISAGE ENTIER",
    "VISAGE + COU",
    "RELACHEMENT CUTANE PAR ZONE",
    "ACNE",
    "AMAS GRAISSEUX/CELLULITE",
  ];

  const treatmentValues = [
    [1000, null],
    [1500, null],
    [1000, null],
    [1000, null],
    [null, 3000],
  ];

  const malePrices = [
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
  ];

  return (
    <div>
      <div className="app">
        <div className="title-container">
          <h1 className="main-title">Tarifs des Traitements</h1>
          <p className="sub-title">(Paiements des forfaits en plusieurs fois possibles)</p>
        </div>
        <div className="table-container">
          <h4>TARIFS EPILATION FEMME</h4>
          <br />
          <table className="custom-table">
            <thead>
              <tr>
                <th>Traitement</th>
                <th>Mon forfait pour 8 séances</th>
                <th>Mon prix par séance en forfait</th>
                <th>Mon prix par séance HORS forfait</th>
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
          <p className="ps-note">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            PS : Si les résultats sont obtenus avant l'épuisement des 8 séances du forfait, les non
            réalisées seront remboursées.
          </p>
        </div>
      </div>
      <div className="app">
        <div className="table-container">
          <h4>TARIFS EPILATION HOMME</h4>
          <br />
          <table className="custom-table">
            <thead>
              <tr>
                <th>Traitement</th>
                <th>Mon forfait pour 10 séances</th>
                <th>Mon prix par séance en forfait</th>
                <th>Mon prix par séance HORS forfait</th>
              </tr>
            </thead>
            <tbody>
              {maleTreatments.map((treatment, index) => (
                <tr key={index}>
                  <td>{treatment}</td>
                  <td>{malePrices[index][0]} €</td>
                  <td>{malePrices[index][1]} €</td>
                  <td>{malePrices[index][2]} €</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="ps-note">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            PS : Si les résultats sont obtenus avant l'épuisement des 8 séances du forfait, les
            séances non réalisées seront remboursées.
          </p>
        </div>
      </div>
      <div className="app">
        <div className="table-container">
          <h4>RADIOFREQUENCE POUR RIDES/RIDULES/AMAS GRAISSEUX/EPILATION/RELACHEMENT CUTANE</h4>
          <br />
          <table className="custom-table">
            <thead>
              <tr>
                <th></th>
                <th>Mon forfait pour 4 séances</th>
                <th>Mon forfait pour 8 séances</th>
              </tr>
            </thead>
            <tbody>
              {treatments.map((treatment, index) => (
                <tr key={index}>
                  <td>{treatment}</td>
                  <td>
                    {treatmentValues[index][0] !== null ? `${treatmentValues[index][0]} €` : ""}
                  </td>
                  <td>
                    {treatmentValues[index][1] !== null ? `${treatmentValues[index][1]} €` : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
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
            <b>PRODUITS INJECTABLES</b>
          </p>
          <p className="ps-note">
            <b>ACIDE HYALURONIQUE : à partir de 300 euros</b>
          </p>
          <p className="ps-note">
            <b>BOTOX : à partir de 300 euros</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TarifsContent;
