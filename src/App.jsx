import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './App.css';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

const GET_PERSONS = "https://randomuser.me/api/?results=50";

export default function App() {
  const [people, setPeople] = useState([]);
  const [hiredPeople, setHiredPeople] = useState([]);
  const navigate = useNavigate();

  const hirePerson = (person) => {
    setHiredPeople(prevPeople => [...prevPeople, person]);
    navigate('/');
  };

  const editPerson = (updatedPerson) => {
    setHiredPeople(prevPeople =>
      prevPeople.map(person =>
        person.login.uuod === updatedPerson.login.uuid ? updatedPerson : person
      )
    );
    navigate('/');
  }

  useEffect(() => {
    fetch(GET_PERSONS)
    .then((response) => response.json())
    .then((responseData) => {
      setPeople(responseData.results);
    });
  }, []);

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Hire Your Team</h1>
        <ul className='under-title'>Dashboard</ul>
      </header>
      <Routes>
        <Route 
          path="/" 
          element={<Dashboard hiredPeople = {hiredPeople} people={people}/>}
        />
        <Route path="/view" element={<PersonProfile props = {people}/>}/>
        <Route 
          path="/view/:id" 
          element={<PersonProfile props = {people} onHire={hirePerson}/>}
        />
        <Route path="/edit" element={<PersonProfile props = {people}/>}/>
        <Route 
          path="/edit/:id" 
          element={<PersonProfile props = {people} onEdit={editPerson}/>}
        />
      </Routes>
    </div>
  );
}
