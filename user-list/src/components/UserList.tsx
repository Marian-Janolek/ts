import React, { useState } from 'react';
import { IUser } from '../models/IUser';
import { users } from '../utils/userService';

interface IState {
  users: IUser[];
}

const UserList: React.FC = () => {
  const [state, setState] = useState<IState>({ users });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="h3">User List</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-striped text-center table-hover shadow">
            <thead className="bg-dark text-white">
              <tr>
                <th>SNO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>DESIGNATION</th>
                <th>COMPANY</th>
              </tr>
            </thead>
            <tbody>
              {state.users.length > 0 &&
                state.users.map((user) => (
                  <tr key={user.sno}>
                    <td>{user.sno}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.designation}</td>
                    <td>{user.company}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
