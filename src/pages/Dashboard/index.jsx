/* eslint-disable react/prop-types */
import PeopleList from './components/PeopleList';

function Dashboard(props) {
  const { hiredPeople, people} = props

  return (
    <main className="dashboard-layout">
      <section>
        <h2 className='title'>People</h2>
        <PeopleList people= {people.filter(person => !person.isHired)}/>
      </section>
      <section>
        <h2 className='title'>Hired People</h2>
        {hiredPeople.length > 0 && <PeopleList people={hiredPeople} />}
      </section>
    </main>
  )
}

export default Dashboard