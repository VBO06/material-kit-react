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
        <div className="table-container">
          <h4>Tableau Femme</h4>
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
        </div>
      </div>
      <div className="app">
        <div className="table-container">
          <h4>Tableau Homme</h4>
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
        </div>
      </div>
    </div>
  );
}

export default TarifsContent;
