const StarshipCard = ({ starship }) => {
  return (
    <li>
      <h3>{starship.name}</h3>
      <p>Class: {starship.starship_class}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Model: {starship.model}</p>
      {/* <p>Cost in credits: {starship.cost_in_credits}</p> */}
    </li>
  )
}

export default StarshipCard
