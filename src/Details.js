import './details.css';
import { Link } from 'react-router-dom';

const Details = (props) => {
  const { eachFnd } = props;
  const { name, image, size, duration, rate, number, id } = eachFnd;

  return (
    <li className="list-item">
      <div className="bg-list">
        <Link to={`/details/${id}`}>
          <img alt={name} className="image" src={image} />
        </Link>
        <h1 className="name">{name}</h1>
        <h2 className="size">Size: {size}</h2>
        <p className="info">Duration: {duration}</p>
        <p className="info">Rate: $ {rate}</p>
        <p className="info">Number: {number}</p>
      </div>
    </li>
  );
};

export default Details;
