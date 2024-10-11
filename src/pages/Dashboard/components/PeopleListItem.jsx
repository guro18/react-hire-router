/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function PeopleListItem(props) {
  const { person } = props;
  console.log("inside peoplesList people", person.wage);

  return (
    <li className='contact-card'>
      <img src={person.picture.large} 
        alt={`${person.name.first} ${person.name.last}`}
      />
      <h3>
        {person.name.title}.
        {person.name.first} {person.name.last}
      </h3>
      <h4>
        <span className='highlight'>City: </span> 
        {person.location.city}
      </h4>
      <h4>
        <span className='highlight'>Country: </span>
        {person.location.country}
      </h4>
      {person.wage && 
      <h4>
        <span className='highlight'>Wage: $ </span>
        {person.wage}
      </h4>
      }
      <Link to={{ pathname: `/view/${person.login.uuid}`}}>View</Link>
    </li>
  )
}

export default PeopleListItem;
