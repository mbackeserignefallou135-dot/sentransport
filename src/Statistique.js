function Statistique(props) {
  return (
    <div className="statistique">
      <h3>{props.titre}</h3>
      <p>{props.valeur}</p>
    </div>
  );
}

export default Statistique;