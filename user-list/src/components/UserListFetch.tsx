import React, { useEffect, useState } from 'react';
import { IUserFetch } from '../models/IUser';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface IState {
  loading: boolean;
  users: IUserFetch[];
  errorMessage: string;
}

const UserListFetch: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUserFetch[],
    errorMessage: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ ...state, loading: true });
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );

        setState({ ...state, loading: false, users: data });
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <p className="h3 fw-bold text-success">User List</p>
          <p className="fst-italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            praesentium labore nihil magni cumque mollitia quo dolorem. Voluptas
            consequuntur temporibus quidem facere. Nobis id quia expedita
            temporibus vel recusandae doloribus.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-hover text-center table-striped">
            <thead className="bg-success text-white">
              <tr>
                <th>SNO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>COMPANY</th>
                <th>WEBSITE</th>
              </tr>
            </thead>
            <tbody>
              {state.users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <Link
                    to={`/contact/list/${user.id}`}
                    className="text-decoration-none text-success tw-bold"
                  >
                    <td>{user.name}</td>
                  </Link>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.company.name}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserListFetch;
