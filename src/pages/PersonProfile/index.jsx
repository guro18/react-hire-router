import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HireForm from './components/HireForm'

function PersonProfile(props) {
  const [person, setPerson] = useState(null)
  const onHire = props.onHire;
  const { id } = useParams();

  useEffect(() => {
    console.log("fetch person with id= ", id);
    const matchingPers = props.props.find((person) => (person.login.uuid) === (id));
    console.log("matching pers", matchingPers);
    setPerson(matchingPers);
  }, [id, person])

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} onHire={onHire}/>
    </article>
  )
}

export default PersonProfile
