/* eslint-disable react/prop-types */
const StarShipCard = ({ starship }) => {
  
  const { uid, name, url } = starship;
  return (
    <a href={url} className="card" key={uid} target="_blank">
      <h2>{name}</h2>
    </a>
  );
};

export default StarShipCard;