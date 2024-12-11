const Card = ({ data }) => (
  <div className="card">
    {data.coverArt && (
      <div className="card-image">
        <img src={data.coverArt} alt={data.title || data.name} />
      </div>
    )}
    <div className="card-content">
      <h3>{data.title || data.name}</h3>
      <p>{data.description}</p>
    </div>
    <div className="card-footer">
      <span>Gênero: {data.genre}</span>
      <span>Nota: {data.rating}</span>
    </div>
  </div>
);

export default Card;
