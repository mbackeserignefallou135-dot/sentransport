import { useState } from 'react';
import './App.css';

import Header from './Header';
import Recherche from './Recherche';
import LigneBus from './LigneBus';
import DetailLigne from './DetailLigne';
import Footer from './Footer';

function App() {

  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

  const lignes = [
    {
      id: 1,
      numero: "1",
      depart: "Parcelles Assainies",
      arrivee: "Plateau",
      arrets: 14,
      listeArrets: ["Parcelles U14", "Camberene", "Colobane", "Plateau"]
    },
    {
      id: 2,
      numero: "7",
      depart: "Guediawaye",
      arrivee: "Place Obelisque",
      arrets: 18,
      listeArrets: ["Guediawaye", "Pikine", "Grand Yoff", "Place Obelisque"]
    },
    {
      id: 3,
      numero: "15",
      depart: "Pikine",
      arrivee: "Medina",
      arrets: 12,
      listeArrets: ["Pikine", "Hann", "Colobane", "Medina"]
    }
  ];

  const lignesFiltrees = lignes.filter(l =>
    l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
    l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
    l.numero.includes(recherche)
  );

 function handleClickLigne(ligne) {
  setLigneSelectionnee(prev =>
    prev && prev.id === ligne.id ? null : ligne
  );
}

  return (
    <div className="App">

      <Header />

      <main className="contenu">

        <Recherche
          valeur={recherche}
          onChange={setRecherche}
        />
        <button onClick={() => setRecherche("")}>
  Effacer
</button>

        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne{lignesFiltrees.length > 1 ? 's' : ''} trouvée{lignesFiltrees.length > 1 ? 's' : ''}
        </p>

        {lignesFiltrees.map(ligne => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={ligneSelectionnee && ligneSelectionnee.id === ligne.id}
            onClick={() => handleClickLigne(ligne)}
          />
        ))}

       {ligneSelectionnee ? (
  <DetailLigne ligne={ligneSelectionnee} />
) : null}

      </main>

      <Footer />

    </div>
  );
}

export default App;