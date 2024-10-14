/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HireForm from './components/HireForm';
import EditForm from './components/EditForm';

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const onHire = props.onHire;
  const onEdit = props.onEdit;
  const { id } = useParams();

  useEffect(() => {
    console.log("fetch person with id= ", id);
    const matchingPers = props.props.find((person) => 
      (person.login.uuid) === (id));
    console.log("matching pers", matchingPers);
    setPerson(matchingPers);
  }, [id, person]);

  if (!person) return <p>Error, please try again</p>;

  return (
    <article className='contact-container'>
      <div className='contact-card'>
        <img src={person.picture.large} 
          alt={`${person.name.first} ${person.name.last}`}
        />
        <h2>{person.name.title}. 
          {person.name.first} {person.name.last}
        </h2>
        <h4>
          <span className='highlight'>City: </span> 
          {person.location.city}
        </h4>
        <h4>
          <span className='highlight'>Country: </span>
          {person.location.country}
        </h4>
        <h4>
          {person.wage && (
            <>
              <span className='highlight'>Wage: </span>
              {person.wage}
            </>
          )}
        </h4>
        {!person.isHired ?
        (<HireForm person={person} onHire={onHire}/>)
        : (<EditForm person={person} onEdit={onEdit}/>)
        }
      </div>
    </article>
  );
}

export default PersonProfile;
