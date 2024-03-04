import { Link } from 'react-router-dom';

function PeopleListItem(props) {
  const { person } = props
  console.log("inside peoplesList people", person.wage)

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last} {person.wage}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={{ pathname: `/view/${person.login.uuid}`}}>view</Link>
    </li>
  )
}

export default PeopleListItem
