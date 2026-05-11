function StatReseau({ lignes }) {

  const totalLignes = lignes.length;

  const totalArrets = lignes.reduce(
    (sum, ligne) => sum + ligne.arrets,
    0
  );

  const ligneMax = lignes.reduce((max, ligne) =>
    ligne.arrets > max.arrets ? ligne : max
  );

  return (
    <div className="stat-reseau">
      <h2>Statistiques du réseau</h2>

      <p>Nombre de lignes : {totalLignes}</p>
      <p>Total des arrêts : {totalArrets}</p>
      <p>
        Ligne la plus longue : {ligneMax.numero} ({ligneMax.arrets} arrêts)
      </p>
    </div>
  );
}

export default StatReseau;