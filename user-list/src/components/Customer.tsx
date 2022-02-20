import React from 'react';

interface IProps {
  name: string;
  age: number;
  title: string;
}

const Customer: React.FC<IProps> = ({ name, age, title }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">Name: {name}</li>
      <li className="list-group-item">Age: {age}</li>
      <li className="list-group-item">Title: {title}</li>
    </ul>
  );
};

export default Customer;
