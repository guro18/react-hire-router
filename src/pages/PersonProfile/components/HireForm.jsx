/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { noXssOrSql } from '../../Validation';

function HireForm(props) {
  const [wage, setWage] = useState();
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  console.log("inside hireform: ",props);
  const {person, onHire} = props;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setWage(value);
    setIsInvalidInput(noXssOrSql(value));
  };
  
  const handleSubmit = (event)  => {
    event.preventDefault();
    onHire(person);
    person.wage = wage;
    person.isHired = true;
  };

  return (
    <form className='text-box-container' onSubmit={handleSubmit}>
      <div className='text-box'>
      <label htmlFor="wage">Wage Offer ($/hour): </label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={handleInputChange}
        value={wage}
      />
      </div>
      <button type="submit" disabled={isInvalidInput}>Hire</button>
      {isInvalidInput && 
      <small 
        style={{ color: 'red' }}>Potential harmful code detected
      </small>
      }
    </form>
  );
}

export default HireForm;
