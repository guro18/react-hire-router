import { useState } from 'react'

function HireForm(props) {
  const [wage, setWage] = useState(0)
  console.log("inside hireform: ",props);
  const {person, onHire} = props;
  
  const handleSubmit = (event)  => {
    event.preventDefault();
    onHire(person);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
