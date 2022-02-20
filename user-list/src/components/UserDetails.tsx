import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IUserFetch } from '../models/IUser';

interface UrlParams {
  id: string;
}

interface IState {
  loading: boolean;
  user: IUserFetch;
  errorMessage: string;
}

const UserDetails: React.FC = () => {
  const { id } = useParams<UrlParams | any>();
  const [user, setUser] = useState<IState>({
    loading: false,
    user: {} as IUserFetch,
    errorMessage: '',
  });
  useEffect(() => {
    const fetchUser = async () => {
      setUser({ ...user, loading: true });
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        setUser({ ...user, loading: false, user: data });
      } catch (error) {
        setUser({ ...user, errorMessage: 'Error during fetching data' });
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <p className="h3 text-success fw-bold">User Details</p>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            voluptatum. Consectetur deserunt cumque ab quos vel eaque enim est
            nobis aut iusto veritatis, voluptatem cum aspernatur quasi suscipit
            voluptatum ducimus!
          </p>
        </div>
      </div>
      {Object.keys(user.user).length > 0 && (
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                Name : <span className="fw-bold">{user.user.name}</span>
              </li>
              <li className="list-group-item">
                Phone : <span className="fw-bold">{user.user.phone}</span>
              </li>
              <li className="list-group-item">
                Email : <span className="fw-bold">{user.user.email}</span>
              </li>
              <li className="list-group-item">
                Company :{' '}
                <span className="fw-bold">{user.user.address.city}</span>
              </li>
              <li className="list-group-item">
                Location :{' '}
                <span className="fw-bold">{user.user.address.street}</span>
              </li>
              <li className="list-group-item">
                City : <span className="fw-bold">{user.user.address.city}</span>
              </li>
              <li className="list-group-item">
                Zip code :{' '}
                <span className="fw-bold">{user.user.address.zipcode}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col">
          <Link to="/contact/list" className="btn btn-success mt-3">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
