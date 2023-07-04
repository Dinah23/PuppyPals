import { useState } from 'react';
import puppyList from './data';
import './App.css';

function App() {
  console.log(puppyList);
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  return (
    <div className='App'>
      {puppies.map((puppy) => {
        return <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>{puppy.name}</p>;
      })}
      {featPupId && (
        <div>
          <h2>{puppyList.find((puppy) => puppy.id === featPupId).name}</h2>
          <ul>
            <li>Age: {puppyList.find((puppy) => puppy.id === featPupId).age}</li>
            <li>Email: {puppyList.find((puppy) => puppy.id === featPupId).email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;


