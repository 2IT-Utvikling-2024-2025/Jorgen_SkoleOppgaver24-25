import { useState } from 'react';
import '/assets/app.css'

let nextId = 0;

export default function app() {
  const [name, setName] = useState('');
  const [groceries, setGroceries] = useState([]);

  return (
    <>
      <h1 classname ="Header">Shopping list</h1>
      <input className="input"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className ="button1" onClick={() => {
        setGroceries([
          ...groceries,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {groceries.map(food => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </>
  );
}


