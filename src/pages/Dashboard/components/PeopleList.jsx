/* eslint-disable react/prop-types */
import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props
  console.log("inside peoplesList people", people);

  return (
    <ul className='contact-container'>
      {people.map((person, index) => 
      (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
