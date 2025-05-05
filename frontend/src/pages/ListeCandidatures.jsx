import { useState, useEffect } from "react";
import axios from "axios";

function ListeCandidatures() {
  const [candidatures, setCandidatures] = useState([]);

  useEffect(() => {
    chargerCandidatures();
  }, []);

  const chargerCandidatures = () => {
    axios.get("http://localhost:5000/api/candidatures")
      .then((res) => setCandidatures(res.data))
      .catch(err => console.error("Erreur lors du chargement:", err));
  };

  const supprimerCandidature = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette candidature ?")) {
      axios.delete(`http://localhost:5000/api/candidatures/${id}`)
        .then(() => {
          // Mettre à jour l'état local après suppression
          setCandidatures(candidatures.filter(c => c._id !== id));
        })
        .catch(err => console.error("Erreur lors de la suppression:", err));
    }
  };

  return (
    <main>
      <h1>Liste des Candidatures</h1>
      <ul>
        {candidatures.map((c) => (
          <li key={c._id}>
            <p>
              <strong>{c.entreprise}</strong> - {c.poste} ({c.statut})
            </p>
            {c.lienOffre && (
              <p>
                <a href={c.lienOffre} target="_blank" rel="noopener noreferrer">
                  Voir l'offre
                </a>
              </p>
            )}
            <button 
              onClick={() => supprimerCandidature(c._id)}
              style={{
                backgroundColor: "#ff4444",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "5px"
              }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ListeCandidatures;