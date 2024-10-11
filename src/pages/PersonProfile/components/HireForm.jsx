/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { noXssOrSql } from '../../Validation';

function HireForm(props) {
  const [wage, setWage] = useState(0);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer: </label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={handleInputChange}
        value={wage}
      />
      <button type="submit" disabled={isInvalidInput}>Hire!</button>
      {isInvalidInput && 
      <small 
        style={{ color: 'red' }}>Potential harmful code detected
      </small>
      }
    </form>
  );
}

export default HireForm;
