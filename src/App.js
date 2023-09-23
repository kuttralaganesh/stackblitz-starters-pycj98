import React, { useState } from 'react';
import './style.css';

const arr = [
  { id: 1, name: 'test1', age: 22 },
  { id: 2, name: 'test2', age: 23 },
  { id: 3, name: 'test3', age: 24 },
  { id: 4, name: 'test4', age: 25 },
  { id: 5, name: 'test5', age: 26 },
];

export default function App() {
  const [state, seState] = useState(arr);
  const [age, setAge] = useState('');
  const [select, setselect] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setselect(e.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();

    const age = arr.filter((item) => {
      const age = select === item.name ? setAge(item.age) : '';
    });
  };

  console.log(select);

  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <input type="text" onChange={(e) => handleChange(e)} />
        <button type="btn">age</button>
      </form>
      {age ? <p>{age}</p> : null}
    </div>
  );
}
