/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { noXssOrSql } from '../../Validation';

function EditForm(props) {
  const [wage, setWage] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  console.log("inside Editform: ",props);
  const {person, onEdit} = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'wage') setWage(value);
    if (name === 'city') setCity(value);
    if (name === 'country') setCountry(value);
    setIsInvalidInput(noXssOrSql(value));
  };
  
  const handleSubmit = (event)  => {
    event.preventDefault();
    if (wage !== '') person.wage = wage;
    if (city !== '') person.location.city = city;
    if (country !== '') person.location.country = country;
    onEdit(person);
  };

  return (
    <form className='text-box-container' onSubmit={handleSubmit}>
    <div className='text-box'>
      <label htmlFor="wage">New Wage Offer ($/hour): </label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={handleInputChange}
        value={wage}
      />
    </div>

    <div className='text-box'>
      <label htmlFor="city">New City: </label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleInputChange}
        value={city}
      />
    </div>

    <div className='text-box'>
      <label htmlFor="country">New Country: </label>
      <input
        type="text"
        id="country"
        name="country"
        onChange={handleInputChange}
        value={country}
      />
    </div>

      <button type="submit" disabled={isInvalidInput}>Edit</button>
      {isInvalidInput && 
      <small 
        style={{ color: 'red' }}>Potential harmful code detected
      </small>
      }
    </form>
  );
}

export default EditForm;
