import React, { useState } from 'react';

interface IProps {}
interface IState {
  name: string;
  age: number;
  title: string;
}

const Employee: React.FC<IProps> = () => {
  const [first, setfirst] = useState<IState>({
    name: 'majko',
    age: 27,
    title: 'frontend',
  });

  return (
    <>
      <h3>Employee component</h3>
      <ul className="list-group">
        <li className="list-group-item">Name: {first.name}</li>
        <li className="list-group-item">Age: {first.age}</li>
        <li className="list-group-item">Title: {first.title}</li>
      </ul>
    </>
  );
};

export default Employee;
